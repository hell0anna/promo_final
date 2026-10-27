import { useState, type ButtonHTMLAttributes, type InputHTMLAttributes, type ReactNode } from 'react';
import { PROMO_CODES, PromoAutocomplete, type PromoCode } from './AppointmentModal';
import PromoToast from './PromoToast';

type Client = {
  name: string;
  phone: string;
  status: 'Пришел' | 'Ожидание';
  visits?: string;
};

const clients: Client[] = [
  { name: 'Мамаева Александра Ивановна', phone: '+7 123 976-57-58', status: 'Пришел' },
  { name: 'Александр', phone: 'Без телефона', status: 'Ожидание' },
  { name: 'Потапова Анна Олеговна', phone: '+7 921 417-40-59', status: 'Ожидание', visits: 'Еще 19 визитов до 24.01.2028' },
  { name: 'Смирнова Екатерина Павловна', phone: '+7 903 128-44-21', status: 'Пришел' },
  { name: 'Кузнецов Михаил Андреевич', phone: '+7 916 502-18-76', status: 'Ожидание' },
  { name: 'Орлова Дарья Сергеевна', phone: '+7 925 771-09-33', status: 'Ожидание' },
];

const publicAssetPrefix = import.meta.env.BASE_URL.replace(/\/?$/, '/');

const iconFiles = {
  chevronDown: '8db46.svg',
  chevronUp: '85ddf.svg',
  chevronLeft: '975c9.svg',
  edit: '61999.svg',
  calendar: '20e6a.svg',
  clients: 'ed123.svg',
  clock: 'ef500.svg',
  details: '15fb0.svg',
  bell: '1f524.svg',
  link: '644cd.svg',
  profile: 'eff82.svg',
  dots: '3d72b.svg',
  history: '6a52c.svg',
  loyalty: '63b53.svg',
  plus: 'fb879.svg',
  minus: '53460.svg',
  wallet: '440aa.svg',
  cards: 'b8ba6.svg',
  loyaltyCard: '4f0eb.svg',
  trash: '0a9a8.svg',
  check: 'eeb75.svg',
} as const;

type IconName = keyof typeof iconFiles;

function YCIcon({ name, size = 16, className = '' }: { name: IconName; size?: 16 | 20 | 24; className?: string }) {
  const scale = size === 16 ? 'scale-[0.667]' : size === 20 ? 'scale-[0.833]' : '';
  const dimensions = size === 16 ? 'size-[16px]' : size === 20 ? 'size-[20px]' : 'size-[24px]';
  return (
    <span className={`flex ${dimensions} shrink-0 items-center justify-center ${className}`}>
      <img alt="" className={`block max-w-none ${scale}`} src={`${publicAssetPrefix}assets/group-icons/${iconFiles[name]}`} />
    </span>
  );
}

function YCButton({
  children,
  variant = 'secondary',
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent-outline' | 'ghost';
}) {
  const variants = {
    primary: 'border-transparent bg-[#ffcb00]',
    secondary: 'border-[rgba(38,38,38,0.15)] bg-white',
    'accent-outline': 'border-[#ffcb00] bg-white',
    ghost: 'border-transparent bg-transparent',
  };
  return (
    <button
      {...props}
      className={`inline-flex min-h-[32px] items-center justify-center gap-[4px] rounded-[8px] border px-[12px] py-[7px] font-['Inter:Medium'] text-[12px] font-medium leading-[16px] text-[#262626] transition-colors hover:bg-[rgba(38,38,38,0.04)] ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

function YCTextField({
  label,
  className = '',
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label?: string }) {
  return (
    <label className={`flex flex-col gap-[6px] font-['Inter:Regular'] text-[12px] leading-[16px] text-[rgba(38,38,38,0.6)] ${className}`}>
      {label}
      <input
        {...props}
        className="h-[32px] w-full rounded-[8px] border border-[rgba(38,38,38,0.15)] bg-white px-[10px] font-['Inter:Regular'] text-[14px] leading-[20px] text-[#262626] outline-none placeholder:text-[rgba(38,38,38,0.35)] focus:border-[#ffcb00]"
      />
    </label>
  );
}

function YCCheckbox({ label, disabled = false }: { label: string; disabled?: boolean }) {
  return (
    <label className={`flex items-center gap-[8px] font-['Inter:Regular'] text-[14px] leading-[20px] ${disabled ? 'text-[rgba(38,38,38,0.35)]' : 'text-[#262626]'}`}>
      <input className="size-[16px] accent-[#ffcb00]" type="checkbox" disabled={disabled} />
      {label}
    </label>
  );
}

function YCFieldBox({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`flex h-[32px] items-center rounded-[8px] border border-[rgba(38,38,38,0.15)] bg-white px-[10px] font-['Inter:Regular'] text-[14px] leading-[20px] text-[#262626] ${className}`}>{children}</div>;
}

function YCSelect({ label, value, onChange, options }: { label?: string; value: string; onChange: (value: string) => void; options: string[] }) {
  return (
    <label className="flex flex-col gap-[6px] font-['Inter:Regular'] text-[12px] leading-[16px] text-[rgba(38,38,38,0.6)]">
      {label}
      <div className="relative">
        <select value={value} onChange={(event) => onChange(event.target.value)} className={`h-[32px] w-full appearance-none rounded-[8px] border border-[rgba(38,38,38,0.15)] bg-white px-[10px] pr-[32px] font-['Inter:Regular'] text-[14px] leading-[20px] outline-none focus:border-[#ffcb00] ${value === 'Выберите акцию' ? 'text-[rgba(38,38,38,0.26)]' : 'text-[#262626]'}`}>
          {options.map((option) => <option key={option}>{option}</option>)}
        </select>
        <span className="pointer-events-none absolute right-[8px] top-1/2 -translate-y-1/2"><YCIcon name="chevronDown" /></span>
      </div>
    </label>
  );
}

function IconTile({ icon, title, active = false }: { icon: IconName; title: string; active?: boolean }) {
  return (
    <div className={`flex h-[88px] flex-col items-center justify-center gap-[8px] rounded-[12px] border border-[rgba(38,38,38,0.08)] font-['Inter:Regular'] text-[14px] leading-[18px] text-[#262626] ${active ? 'bg-[rgba(38,38,38,0.08)]' : 'bg-white'}`}>
      <YCIcon name={icon} size={20} />
      <span className="text-center text-[12px] leading-[16px]">{title}</span>
    </div>
  );
}

function ClientDetails({ client }: { client: Client }) {
  return (
    <div className="flex h-full flex-col overflow-y-auto p-[20px]">
      <div className="mb-[28px] flex items-center gap-[4px] font-['Inter:Regular'] text-[12px] leading-[16px] text-[rgba(38,38,38,0.6)]"><YCIcon name="chevronLeft" />Назад к поиску</div>
      <div className="mb-[20px] flex border-b border-[rgba(38,38,38,0.12)]">
        <div className="flex-1 border-b-[3px] border-[#ffcb00] pb-[12px] text-center font-['Inter:Medium'] text-[14px]">Клиент</div>
        <div className="flex-1 pb-[12px] text-center font-['Inter:Regular'] text-[14px] text-[rgba(38,38,38,0.6)]">Чат</div>
      </div>
      <div className="mb-[18px] flex items-start justify-between">
        <div>
          <p className="font-['Inter:Regular'] text-[12px] text-[rgba(38,38,38,0.6)]">Клиент</p>
          <p className="mt-[4px] max-w-[220px] font-['Inter:Regular'] text-[16px] leading-[22px] text-[#262626]">{client.name}</p>
          <p className="mt-[4px] font-['Inter:Regular'] text-[14px] text-[rgba(38,38,38,0.6)]">{client.phone}</p>
        </div>
        <div className="flex gap-[8px]">
          <YCButton aria-label="Открыть клиента" className="size-[40px] min-h-0 p-0"><YCIcon name="profile" /></YCButton>
          <YCButton aria-label="Дополнительные действия" className="size-[40px] min-h-0 p-0"><YCIcon name="dots" /></YCButton>
        </div>
      </div>
      <div className="mb-[38px] flex gap-[8px]">
        <IconTile icon="history" title="История посещений" />
        <IconTile icon="loyalty" title="Лояльность" />
      </div>
      <div className="space-y-[28px] font-['Inter:Regular']">
        <div><p className="text-[14px] text-[rgba(38,38,38,0.6)]">Примечание о клиенте</p><p className="mt-[8px] text-[14px]">-</p></div>
        <div><p className="text-[14px] text-[rgba(38,38,38,0.6)]">Кастомное поле «Номер авто»</p><p className="mt-[8px] text-[14px]">-</p></div>
        <div><p className="text-[14px] text-[rgba(38,38,38,0.6)]">Кастомное поле «Семейное положение»</p><p className="mt-[8px] text-[14px]">-</p></div>
        <div><p className="text-[14px] text-[rgba(38,38,38,0.6)]">Кастомное поле «Дата проверочная»</p><p className="mt-[8px] text-[14px]">-</p></div>
        <div>
          <p className="mb-[18px] font-['Inter:Semi_Bold'] text-[16px] font-semibold">Данные по сети</p>
          <p className="text-[14px] text-[rgba(38,38,38,0.6)]">Сеть Сертификация — Анна Потапова</p>
          <div className="mt-[22px] grid grid-cols-2 gap-x-[24px] gap-y-[18px]">
            <div><p className="text-[12px] text-[rgba(38,38,38,0.6)]">Последний визит</p><p className="mt-[4px] text-[14px]">22.10 15:00</p></div>
            <div><p className="text-[12px] text-[rgba(38,38,38,0.6)]">Всего визитов</p><p className="mt-[4px] text-[14px]">3</p></div>
            <div><p className="text-[12px] text-[rgba(38,38,38,0.6)]">Баланс</p><p className="mt-[4px] text-[14px]">-1 300 ₽</p></div>
            <div><p className="text-[12px] text-[rgba(38,38,38,0.6)]">Продано</p><p className="mt-[4px] text-[14px]">12 600 ₽</p></div>
            <div><p className="text-[12px] text-[rgba(38,38,38,0.6)]">Оплачено</p><p className="mt-[4px] text-[14px]">11 300 ₽</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NewClientForm() {
  return (
    <div className="flex h-full flex-col gap-[18px] overflow-y-auto p-[20px]">
      {['Фамилия', 'Имя', 'Отчество', 'Телефон', 'Email'].map((label, index) => (
        <YCTextField key={label} label={label} placeholder={['Иванов', 'Иван', 'Иванович', '+7   000 000-00-00', 'example@mail.com'][index]} />
      ))}
      <div>
        <p className="mb-[6px] font-['Inter:Regular'] text-[12px] text-[rgba(38,38,38,0.6)]">Количество мест</p>
        <YCFieldBox className="w-[136px] justify-around"><YCIcon name="minus" /><span>1</span><YCIcon name="plus" /></YCFieldBox>
      </div>
      <YCCheckbox label="Записывает другого посетителя" disabled />
      <YCButton variant="primary" className="w-fit">Записать в событие</YCButton>
    </div>
  );
}

export default function GroupAppointmentModal({ onClose }: { onClose: () => void }) {
  const [expandedClient, setExpandedClient] = useState<number | null>(null);
  const [selectedOffer, setSelectedOffer] = useState('Выберите акцию');
  const [promoInput, setPromoInput] = useState('');
  const [selectedPromo, setSelectedPromo] = useState<PromoCode | null>(null);
  const [promoOpen, setPromoOpen] = useState(false);
  const [paymentDetailsOpen, setPaymentDetailsOpen] = useState(true);
  const [promoToastVisible, setPromoToastVisible] = useState(false);
  const selectedClient = expandedClient === null ? null : clients[expandedClient];
  const filteredPromoCodes = PROMO_CODES.filter((code) => code.includes(promoInput.trim().toUpperCase()));
  const promoDiscount = selectedPromo ? Number(selectedPromo.match(/\d+/)?.[0] ?? 0) / 100 : 0;
  const offerDiscount = selectedOffer === 'Выберите акцию' ? 0 : 0.1;
  const discount = selectedPromo ? promoDiscount : offerDiscount;
  const discountedPrice = Math.round(1300 * (1 - discount));
  const discountAmount = 1300 - discountedPrice;
  const discountLabel = selectedPromo
    ? `Скидка по промокоду ${selectedPromo}`
    : selectedOffer === 'День рождения'
      ? 'Акция «День рождения»'
      : 'Персональная скидка';
  const updatePromoInput = (value: string) => {
    setPromoInput(value);
    setSelectedPromo(null);
    setPromoOpen(true);
  };
  const selectPromo = (code: PromoCode) => {
    setPromoInput(code);
    setSelectedPromo(code);
    setPromoOpen(false);
    setPromoToastVisible(true);
    window.setTimeout(() => setPromoToastVisible(false), 2500);
  };
  const clearDiscount = () => {
    setPromoInput('');
    setSelectedPromo(null);
    setSelectedOffer('Выберите акцию');
    setPromoOpen(false);
  };

  return (
    <div className="relative flex size-full overflow-hidden rounded-[20px] bg-[#f5f6fb] pb-[64px] pt-[16px] shadow-[0px_12px_48px_0px_rgba(0,0,0,0.24)]">
      <PromoToast visible={promoToastVisible} onClose={() => setPromoToastVisible(false)} />
      <aside className="h-full w-[244px] shrink-0 overflow-y-auto px-[16px] pb-[16px]">
        <div className="rounded-[12px] bg-[#e9edf7] p-[12px]">
          <div className="flex items-center gap-[10px]">
            <img src={`${publicAssetPrefix}assets/masters/arina.jpg`} alt="Алина" className="size-[40px] rounded-[8px] object-cover" />
            <div className="flex-1"><p className="font-['Inter:Regular'] text-[14px]">Алина</p><p className="text-[12px] text-[rgba(38,38,38,0.6)]">Тренер</p></div><YCIcon name="chevronDown" />
          </div>
          <div className="my-[12px] border-t border-dashed border-[rgba(38,38,38,0.12)]" />
          <div className="flex gap-[10px]"><YCIcon name="calendar" size={20} /><div><p className="text-[14px]">22 октября</p><p className="text-[12px] text-[rgba(38,38,38,0.6)]">15:00–16:00 · 1 ч</p></div></div>
          <div className="mt-[14px] flex items-center gap-[6px] pl-[48px] text-[12px]"><YCIcon name="edit" />Редактировать</div>
        </div>
        <div className="mt-[18px] rounded-[12px] border border-[rgba(38,38,38,0.1)] bg-white p-[12px]">
          <div className="flex items-center gap-[10px]"><div className="flex size-[40px] items-center justify-center rounded-[8px] bg-[#f0edff]"><YCIcon name="calendar" size={20} /></div><div className="min-w-0 flex-1"><p className="truncate text-[14px]">Воркаут</p><p className="text-[12px] text-[rgba(38,38,38,0.6)]">10 мест</p></div><YCIcon name="chevronDown" /></div>
          <div className="my-[12px] border-t border-dashed border-[rgba(38,38,38,0.12)]" />
          <p className="text-center text-[12px] text-[rgba(38,38,38,0.6)]">Не повторяется</p>
        </div>
        <div className="mt-[28px] grid grid-cols-2 gap-[8px]">
          <IconTile icon="clients" title="Клиенты 6/10" active />
          <IconTile icon="clock" title="Расписание" />
          <IconTile icon="details" title="Детали события" />
          <IconTile icon="bell" title="Уведомления" />
          <IconTile icon="link" title="Ссылка для подключения" />
        </div>
      </aside>

      <main className="flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-[12px] border border-[rgba(38,38,38,0.1)] bg-white">
        <div className="flex shrink-0 items-center gap-[12px] p-[20px]"><div className="flex size-[40px] items-center justify-center rounded-full bg-[#f0f1f5]"><YCIcon name="clients" size={20} /></div><h2 className="font-['Inter:Semi_Bold'] text-[20px] font-semibold">Клиенты <span className="font-normal text-[rgba(38,38,38,0.6)]">6/10</span></h2></div>
        <div className="mx-[20px] mb-[20px] min-h-0 flex-1 overflow-y-auto rounded-[12px] border border-[rgba(38,38,38,0.15)]">
          {clients.map((client, index) => {
            const expanded = expandedClient === index;
            return (
              <div key={client.name} className={`border-b border-[rgba(38,38,38,0.12)] last:border-b-0 ${expanded ? 'bg-[#f3f3f3]' : 'bg-white'}`}>
                <YCButton variant="ghost" onClick={() => setExpandedClient(expanded ? null : index)} className="min-h-[86px] w-full justify-start gap-[12px] rounded-none px-[20px] text-left">
                  <YCIcon name={expanded ? 'chevronUp' : 'chevronDown'} />
                  <div className="min-w-0 flex-1"><p className="truncate text-[14px]">{client.name}</p><p className="text-[12px] text-[rgba(38,38,38,0.6)]">{client.phone}</p></div>
                  <div className="rounded-[4px] bg-[#f0f1f5] px-[6px] py-[3px] text-[11px]">Не оплачено</div>
                  <div className="flex items-center gap-[4px] rounded-[8px] border border-[rgba(38,38,38,0.15)] bg-white px-[12px] py-[7px] text-[12px]">{client.status === 'Пришел' ? <YCIcon name="plus" /> : <YCIcon name="clock" />}{client.status}<YCIcon name="chevronDown" /></div>
                </YCButton>
                {expanded && (
                  <div className="mx-[20px] mb-[20px] rounded-[12px] border border-[rgba(38,38,38,0.15)] bg-white p-[20px]">
                    <div className="grid grid-cols-5 gap-[10px]">
                      {['Кол-во мест', 'Цена, ₽', 'Скидка, %', 'Итого, ₽', 'Оплачено'].map((label, fieldIndex) => (
                        <div key={label}><p className="mb-[6px] text-[12px] text-[rgba(38,38,38,0.6)]">{label}</p><YCFieldBox>{fieldIndex === 0 ? <div className="flex w-full items-center justify-between"><YCIcon name="minus" /><span>1</span><YCIcon name="plus" /></div> : ['1300', String(Math.round(discount * 100)), String(discountedPrice), '0'][fieldIndex - 1]}</YCFieldBox></div>
                      ))}
                    </div>
                    <YCButton className="mt-[20px]"><YCIcon name="plus" />Добавить товар или абонемент</YCButton>
                    {discount > 0 && (
                      <div className="mt-[20px]">
                        <YCButton variant="ghost" className="min-h-0 gap-[6px] p-0 text-[14px] text-[rgba(38,38,38,0.6)]" onClick={() => setPaymentDetailsOpen((open) => !open)}>
                          Детали оплаты
                          <YCIcon name={paymentDetailsOpen ? 'chevronUp' : 'chevronDown'} />
                        </YCButton>
                        {paymentDetailsOpen && (
                          <div className="my-[4px] flex items-center pl-[20px]">
                            <p className="flex-1 font-['Inter:Regular'] text-[14px] leading-[20px] text-[rgba(38,38,38,0.6)]">{discountLabel}</p>
                            <p className="font-['Inter:Regular'] text-[14px] leading-[20px] text-[#18a957]">{discountAmount.toLocaleString('ru-RU')} ₽</p>
                            <YCButton variant="ghost" aria-label="Удалить скидку" className="ml-[8px] size-[32px] min-h-0 p-0" onClick={clearDiscount}><YCIcon name="trash" /></YCButton>
                          </div>
                        )}
                      </div>
                    )}
                    <div className={discount > 0 ? 'mt-[4px]' : 'mt-[28px]'}><YCSelect value={selectedOffer} onChange={setSelectedOffer} options={['Выберите акцию', 'Скидка постоянного клиента', 'День рождения']} /></div>
                    <div className="mt-[8px]">
                      <PromoAutocomplete
                        value={promoInput}
                        open={promoOpen}
                        options={filteredPromoCodes}
                        onChange={updatePromoInput}
                        onFocus={() => setPromoOpen(true)}
                        onClose={() => setPromoOpen(false)}
                        onClear={() => updatePromoInput('')}
                        onSelect={selectPromo}
                        className="w-full"
                      />
                    </div>
                    <div className="mt-[18px] flex justify-between text-[14px]"><span className="text-[rgba(38,38,38,0.6)]">К оплате</span><strong className="text-[18px]">{discountedPrice.toLocaleString('ru-RU')} ₽</strong></div>
                    <div className="mt-[18px] flex flex-wrap gap-[8px]"><YCButton><YCIcon name="cards" />Карта<YCIcon name="chevronDown" /></YCButton><YCButton><YCIcon name="wallet" />Наличные<YCIcon name="chevronDown" /></YCButton><YCButton><YCIcon name="loyaltyCard" />Карта лояльности<YCIcon name="chevronDown" /></YCButton><YCButton variant="accent-outline"><YCIcon name="billCheck" />Все способы</YCButton></div>
                    <div className="mt-[18px]"><YCCheckbox label="Распечатать фискальный чек" /></div>
                    <p className="mb-[6px] mt-[24px] text-[12px] text-[rgba(38,38,38,0.6)]">Комментарий к записи</p>
                    <YCTextField placeholder="Напишите комментарий" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      <aside className="ml-[16px] mr-[16px] h-full w-[340px] shrink-0 overflow-y-auto rounded-[12px] border border-[rgba(38,38,38,0.1)] bg-white">
        {selectedClient ? <ClientDetails client={selectedClient} /> : <NewClientForm />}
      </aside>

      <div className="absolute bottom-0 left-0 right-0 flex h-[64px] items-center justify-between bg-[#f5f6fb] px-[16px]">
        <span className="font-['Inter:Regular'] text-[12px] text-[rgba(38,38,38,0.6)]">Вернуть старый дизайн</span>
        <div className="flex gap-[8px]"><YCButton><YCIcon name="trash" />Удалить событие</YCButton><YCButton variant="accent-outline" onClick={onClose}><YCIcon name="check" />Сохранить изменения</YCButton></div>
      </div>
    </div>
  );
}
