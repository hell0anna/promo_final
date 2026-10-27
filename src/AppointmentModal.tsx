import { useEffect, useRef, useState } from 'react';
import PaymentScreen from './PaymentScreen';
import PromoToast from './PromoToast';

const assetPathPrefix = `${import.meta.env.BASE_URL}assets/modal`.replace(/\/+/g, '/');
export const PROMO_CODES = ['WELCOME20', 'AUTUMN50', 'BLACK30', 'FIRST15'] as const;

export type PromoCode = (typeof PROMO_CODES)[number];

export function PromoAutocomplete({
  value,
  open,
  options,
  onChange,
  onFocus,
  onClose,
  onClear,
  onSelect,
  placement = 'down',
  className = 'w-[200px]',
}: {
  value: string;
  open: boolean;
  options: readonly PromoCode[];
  onChange: (value: string) => void;
  onFocus: () => void;
  onClose: () => void;
  onClear: () => void;
  onSelect: (code: PromoCode) => void;
  placement?: 'up' | 'down';
  className?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleOutsideClick = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('pointerdown', handleOutsideClick);
    return () => document.removeEventListener('pointerdown', handleOutsideClick);
  }, [open, onClose]);

  return (
    <div ref={rootRef} className={`relative shrink-0 ${className}`}>
      <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex h-[32px] items-center p-[3px] relative rounded-[8px] w-full">
        <input
          aria-label="Промокод"
          autoComplete="off"
          className="h-[24px] min-w-0 flex-1 bg-transparent px-[6px] font-['Inter:Regular'] text-[14px] leading-[20px] text-[#262626] outline-none placeholder:text-[rgba(38,38,38,0.26)]"
          placeholder="Промокод"
          value={value}
          onChange={(event) => onChange(event.target.value.toUpperCase())}
          onFocus={onFocus}
          onClick={onFocus}
          onBlur={() => window.setTimeout(onClose, 120)}
        />
        {value ? (
          <button
            type="button"
            aria-label="Очистить промокод"
            className="mr-[2px] flex size-[16px] shrink-0 items-center justify-center rounded-[4px] font-['Inter:Regular'] text-[18px] leading-none text-[rgba(38,38,38,0.6)] hover:bg-[rgba(38,38,38,0.04)] hover:text-[#262626]"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              onClear();
              onClose();
            }}
          >
            ×
          </button>
        ) : (
          <button
            type="button"
            aria-label="Открыть список промокодов"
            className={`mr-[2px] size-[16px] shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
            onMouseDown={(event) => event.preventDefault()}
            onClick={onFocus}
          >
            <img alt="" className="block size-[16px]" src={imgChevronDown} />
          </button>
        )}
      </div>
      {open && (
        <div className={`absolute left-0 right-0 z-50 overflow-hidden rounded-[8px] border border-[rgba(38,38,38,0.15)] bg-white py-[4px] shadow-[0px_2px_24px_0px_rgba(0,0,0,0.08)] ${placement === 'up' ? 'bottom-[36px]' : 'top-[36px]'}`}>
          {options.length ? options.map((code) => (
            <button
              key={code}
              type="button"
              className="flex w-full items-center px-[10px] py-[7px] text-left font-['Inter:Regular'] text-[14px] leading-[20px] text-[#262626] hover:bg-[rgba(38,38,38,0.04)]"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => onSelect(code)}
            >
              {code}
            </button>
          )) : (
            <div className="px-[10px] py-[7px] font-['Inter:Regular'] text-[12px] leading-[16px] text-[rgba(38,38,38,0.6)]">
              Промокоды не найдены
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ServicePrice({ amount, discount }: { amount: number; discount: number }) {
  const format = (value: number) => `${Math.round(value).toLocaleString('ru-RU')} ₽`;

  if (!discount) {
    return <p className="leading-[20px]">{format(amount)}</p>;
  }

  return (
    <div className="flex items-start gap-[8px]">
      <div className="rounded-[4px] bg-[#edf7f3] px-[4px] py-[2px] font-['Inter:Medium'] text-[11px] font-medium leading-[14px] text-[#159570]">
        −{Math.round(discount * 100)}%
      </div>
      <div className="flex flex-col items-end">
        <p className="leading-[20px]">{format(amount * (1 - discount))}</p>
        <p className="font-['Inter:Regular'] text-[12px] font-normal leading-[16px] text-[rgba(38,38,38,0.6)] line-through">
          {format(amount)}
        </p>
      </div>
    </div>
  );
}

const imgGif = "unknown";
const imgLeftIcon = `${assetPathPrefix}/04d64.svg`;
const imgUserPhoto10 = `${assetPathPrefix}/43d1e.png`;
const imgUserPhoto13 = `${assetPathPrefix}/3ef6d.png`;
const imgCalendar2 = `${assetPathPrefix}/67727.svg`;
const imgLeftIcon1 = `${assetPathPrefix}/49197.svg`;
const imgInfo = `${assetPathPrefix}/d605b.svg`;
const imgChevronDown = `${assetPathPrefix}/facb5.svg`;
const imgIcon = `${assetPathPrefix}/84a1f.svg`;
const imgChevronDown1 = `${assetPathPrefix}/903d6.svg`;
const imgList = `${assetPathPrefix}/6e600.svg`;
const imgRepeat = `${assetPathPrefix}/8733a.svg`;
const imgBell = `${assetPathPrefix}/6f011.svg`;
const imgBoxGoods = `${assetPathPrefix}/fb8eb.svg`;
const imgOther = `${assetPathPrefix}/288cb.svg`;
const imgClock = `${assetPathPrefix}/bacd3.svg`;
const imgPlus = `${assetPathPrefix}/e4a66.svg`;
const imgMinus = `${assetPathPrefix}/39be8.svg`;
const imgCheck = `${assetPathPrefix}/15fd6.svg`;
const imgIcon1 = `${assetPathPrefix}/6aefb.svg`;
const imgSeparation = `${assetPathPrefix}/71cd7.svg`;
const imgBellService = `${assetPathPrefix}/8bf85.svg`;
const imgBoxGoods1 = `${assetPathPrefix}/28553.svg`;
const imgSearch = `${assetPathPrefix}/57fa6.svg`;
const imgSeparation1 = `${assetPathPrefix}/f3757.svg`;
const imgLeftIcon2 = `${assetPathPrefix}/c7d41.svg`;
const imgCards = `${assetPathPrefix}/2b22b.svg`;
const imgRightIcon = `${assetPathPrefix}/6778e.svg`;
const imgWallet = `${assetPathPrefix}/444a6.svg`;
const imgPaymentCard = `${assetPathPrefix}/2d14e.svg`;
const imgCheckbox = `${assetPathPrefix}/c850c.svg`;
const imgLeftIcon3 = `${assetPathPrefix}/87ab3.svg`;
const imgLine = `${assetPathPrefix}/e27de.svg`;
const imgCopy = `${assetPathPrefix}/0af70.svg`;
const imgIcon2 = `${assetPathPrefix}/d5504.svg`;
const imgIcon3 = `${assetPathPrefix}/89b40.svg`;
const imgArchive = `${assetPathPrefix}/6dd0e.svg`;
const imgLoyaltyLoyaltyCard = `${assetPathPrefix}/1b879.svg`;
const imgAnalytics = `${assetPathPrefix}/ba34d.svg`;
const imgSupportContact = `${assetPathPrefix}/a3520.svg`;
const imgWorkCase = `${assetPathPrefix}/d639b.svg`;
const imgFolder = `${assetPathPrefix}/8358e.svg`;
const imgInfo1 = `${assetPathPrefix}/991ea.svg`;
const imgLeftIcon4 = `${assetPathPrefix}/620a1.svg`;

type RightProps = {
  className?: string;
  chevron?: "None";
  content?: "None";
  extraIcon?: "Off";
  icon?: "Off";
};

function Right({ className, chevron = "None", content = "None", extraIcon = "Off", icon = "Off" }: RightProps) {
  return <div className={className || "h-[24px] relative w-[0.5px]"} data-node-id="2042:26294" />;
}

function CheckboxOffS({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-node-id="2007:3707" data-name=".Checkbox_off_S">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border border-[rgba(38,38,38,0.15)] border-solid left-1/2 rounded-[4px] size-[16px] top-1/2" data-node-id="2007:3708" data-name="Checkbox" />
    </div>
  );
}

type SpaceBlockProps = {
  className?: string;
  size?: "4" | "12";
};

function SpaceBlock({ className, size = "4" }: SpaceBlockProps) {
  const is4 = size === "4";
  return <div className={className || `overflow-clip relative w-[800px] ${is4 ? "h-[4px]" : "h-[12px]"}`} id={is4 ? "node-2042_23849" : "node-2042_23847"} />;
}

type TextSlotProps = {
  className?: string;
  blinkigCursor?: boolean;
  size?: "Small";
  type?: "None";
};

function TextSlot({ className, blinkigCursor = false, size = "Small", type = "None" }: TextSlotProps) {
  return (
    <div className={className || "content-stretch flex items-start min-w-[44px] px-[8px] py-[2px] relative w-[212px]"} data-node-id="2042:26549">
      {blinkigCursor && (
        <div className="h-[20px] overflow-clip relative shrink-0 w-px" data-node-id="2042:26550" data-name="Blinkig Cursor">
          <div className="absolute inset-[-50%_0]" data-node-id="I2042:26550;8667:17348" data-name="GIF">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGif} />
          </div>
        </div>
      )}
      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic opacity-0 overflow-hidden relative shrink-0 text-[14px] text-[rgba(38,38,38,0.26)] text-ellipsis whitespace-nowrap" data-node-id="2042:26551">
        Placeholder
      </p>
    </div>
  );
}

function Subheader({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex gap-[4px] items-start relative w-[228px]"} data-node-id="2042:26732" data-name="🛠️ Subheader">
      <div className="relative shrink-0 size-[16px]" data-node-id="2042:26733" data-name="Left Icon">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLeftIcon} />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#262626] text-[12px]" data-node-id="2042:26734">
        <p className="leading-[16px]">Закрепленные поля</p>
      </div>
    </div>
  );
}

export type AppointmentModalData = {
  master: string;
  masterRole: string;
  masterPhoto: string;
  client: string;
  phone: string;
  date: string;
  time: string;
  service: string;
};

export default function AppointmentModal({ appointment, onClose }: { appointment: AppointmentModalData; onClose: () => void }) {
  const centerColumnRef = useRef<HTMLDivElement>(null);
  const paymentBlockRef = useRef<HTMLDivElement>(null);
  const [isPaymentBlockVisible, setIsPaymentBlockVisible] = useState(false);
  const [promoInput, setPromoInput] = useState('');
  const [selectedPromo, setSelectedPromo] = useState<PromoCode | null>(null);
  const [promoOpen, setPromoOpen] = useState(false);
  const [promoAnchor, setPromoAnchor] = useState<'main' | 'sticky' | 'payment' | null>(null);
  const [showPaymentScreen, setShowPaymentScreen] = useState(false);
  const [promoToastVisible, setPromoToastVisible] = useState(false);
  const filteredPromoCodes = PROMO_CODES.filter((code) => code.includes(promoInput.trim().toUpperCase()));
  const discount = selectedPromo ? Number(selectedPromo.match(/\d+/)?.[0] ?? 0) / 100 : 0;
  const isAutumnPromo = selectedPromo === 'AUTUMN50';
  const excludesProducts = selectedPromo === 'WELCOME20' || selectedPromo === 'FIRST15';
  const serviceDiscount = (amount: number) => isAutumnPromo ? (amount === 800 ? discount : 0) : discount;
  const productDiscount = excludesProducts || isAutumnPromo ? 0 : discount;
  const suggestedServiceDiscount = isAutumnPromo ? 0 : discount;
  const price = (amount: number) => `${Math.round(amount * (1 - suggestedServiceDiscount)).toLocaleString('ru-RU')} ₽`;
  const totalPrice = `${Math.round(
    isAutumnPromo
      ? 1750 - 800 * discount
      : excludesProducts
        ? 1250 * (1 - discount) + 500
        : 1750 * (1 - discount),
  ).toLocaleString('ru-RU')} ₽`;
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

  useEffect(() => {
    const paymentBlock = paymentBlockRef.current;
    const centerColumn = centerColumnRef.current;
    if (!paymentBlock || !centerColumn) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsPaymentBlockVisible(entry.isIntersecting),
      { root: centerColumn, threshold: 0.05 },
    );

    observer.observe(paymentBlock);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#f3f3f3] content-stretch flex gap-[8px] items-start overflow-clip pb-[64px] pt-[16px] px-[16px] relative rounded-[20px] shadow-[0px_12px_48px_0px_rgba(0,0,0,0.24)] size-full" data-node-id="2076:106167" data-name=":::">
      <PromoToast visible={promoToastVisible} onClose={() => setPromoToastVisible(false)} />
      <div className="content-stretch flex h-full flex-col gap-[24px] items-start overflow-y-auto relative shrink-0 w-[244px]" data-node-id="2076:106177" data-name="Employer info">
        <div className="bg-[rgba(38,38,38,0.03)] content-stretch flex flex-col items-start p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="I2076:106177;2005:3033" data-name="🔴 Wrapper">
          <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-node-id="I2076:106177;2005:3033;22577:30911" data-name="Slot">
            <div className="content-stretch flex items-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2076:106177;2005:3033;22577:30911;2076:106169" data-name="🟡 Basic Card">
              <div className="content-stretch flex items-start pr-[12px] py-[4px] relative shrink-0" data-node-id="I2076:106177;2005:3033;22577:30911;2076:106169;13135:18207" data-name=".⚙️ Left">
                <div className="content-stretch flex items-center overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-node-id="I2076:106177;2005:3033;22577:30911;2076:106169;13135:18207;12096:19950" data-name="Avatar">
                  <div className="relative shrink-0 size-[32px]" data-node-id="I2076:106177;2005:3033;22577:30911;2076:106169;13135:18207;12096:19950;2152:8150" data-name="User Photo 10">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={appointment.masterPhoto} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I2076:106177;2005:3033;22577:30911;2076:106169;13135:18208" data-name=".⚙️ Text">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2076:106177;2005:3033;22577:30911;2076:106169;13135:18208;12110:8331" data-name="Title">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[#262626] text-[14px]" data-node-id="I2076:106177;2005:3033;22577:30911;2076:106169;13135:18208;12110:8332">
                    {appointment.master}
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] w-[min-content]" data-node-id="I2076:106177;2005:3033;22577:30911;2076:106169;13135:18208;12110:8335">
                  {appointment.masterRole}
                </p>
              </div>
              <Right className="h-[24px] relative shrink-0 w-[0.5px]" />
            </div>
            <div className="h-[12px] relative shrink-0 w-full" data-node-id="I2076:106177;2005:3033;22577:30911;2076:106170" data-name="Space Block" />
            <div className="content-stretch flex items-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2076:106177;2005:3033;22577:30911;2076:106171" data-name="🟡 Basic Card">
              <div className="content-stretch flex items-start pr-[12px] py-[4px] relative shrink-0" data-node-id="I2076:106177;2005:3033;22577:30911;2076:106171;13135:18207" data-name=".⚙️ Left">
                <div className="bg-[rgba(38,38,38,0.07)] content-stretch flex items-center p-[8px] relative rounded-[100px] shrink-0" data-node-id="I2076:106177;2005:3033;22577:30911;2076:106171;13135:18207;12081:32168" data-name="ㅤ  ↪ Color icon">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106177;2005:3033;22577:30911;2076:106171;13135:18207;12081:32168;3783:9563" data-name="Magic">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCalendar2} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I2076:106177;2005:3033;22577:30911;2076:106171;13135:18208" data-name=".⚙️ Text">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2076:106177;2005:3033;22577:30911;2076:106171;13135:18208;12110:8331" data-name="Title">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[#262626] text-[14px]" data-node-id="I2076:106177;2005:3033;22577:30911;2076:106171;13135:18208;12110:8332">
                    {appointment.date}
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] w-[min-content]" data-node-id="I2076:106177;2005:3033;22577:30911;2076:106171;13135:18208;12110:8335">
                  {appointment.time}
                </p>
              </div>
              <Right className="h-[24px] relative shrink-0 w-[0.5px]" />
            </div>
            <div className="h-[8px] relative shrink-0 w-full" data-node-id="I2076:106177;2005:3033;22577:30911;2076:106175" data-name="Space Block" />
            <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="I2076:106177;2005:3033;22577:30911;2076:106176" data-name="Button">
              <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106177;2005:3033;22577:30911;2076:106176;756:20990" data-name="Left Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLeftIcon1} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] whitespace-nowrap" data-node-id="I2076:106177;2005:3033;22577:30911;2076:106176;756:20991">
                Редактировать
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I2076:106177;2005:5181" data-name="Fixed Fields">
          <Subheader className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[228px]" />
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="I2076:106177;2005:5185" data-name="Textarea">
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-node-id="I2076:106177;2005:5185;5069:19920" data-name="⚙️ Label">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic overflow-hidden relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] text-ellipsis whitespace-nowrap" data-node-id="I2076:106177;2005:5185;5069:19920;317:9205">
                Комментарий
              </p>
            </div>
            <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex h-[72px] items-start overflow-clip p-[4px] relative rounded-[8px] shrink-0 w-full" data-node-id="I2076:106177;2005:5185;5069:19921" data-name="⚙️ Input Form">
              <TextSlot className="content-stretch flex flex-[1_0_0] items-start min-w-[44px] px-[8px] py-[2px] relative" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="I2076:106177;2005:5186" data-name="Resources">
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-node-id="I2076:106177;2005:5187" data-name="⚙️ Label">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic overflow-hidden relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] text-ellipsis whitespace-nowrap" data-node-id="I2076:106177;2005:5187;317:9205">
                Ресурсы
              </p>
              <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106177;2005:5187;1104:6963" data-name="Info">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgInfo} />
              </div>
            </div>
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="I2076:106177;2005:5188" data-name="Layout">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-node-id="I2076:106177;2005:5189" data-name="Select">
                <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex items-center overflow-clip p-[4px] relative rounded-[8px] shrink-0 w-full" data-node-id="I2076:106177;2005:5189;2753:33175" data-name="⚙️ Input Form/Small/Default/On/Off">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-w-[44px] px-[8px] py-[2px] relative" data-node-id="I2076:106177;2005:5189;2753:33175;6495:20993" data-name=".⚙️ Text Slot">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#262626] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I2076:106177;2005:5189;2753:33175;6495:20993;5523:18820">
                      Не выбран
                    </p>
                  </div>
                  <div className="content-stretch flex items-center overflow-clip pr-[4px] py-[4px] relative shrink-0" data-node-id="I2076:106177;2005:5189;2753:33175;6495:22859" data-name=".⚙️ Right Slot">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106177;2005:5189;2753:33175;6495:22859;5523:18960" data-name="Chevron Down">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0 w-[32px]" data-node-id="I2076:106177;2005:5190" data-name="Icon Button">
                <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106177;2005:5190;755:26533" data-name="Icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="I2076:106177;2005:5191" data-name="Multiselect">
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-node-id="I2076:106177;2005:5191;2512:20909" data-name="⚙️ Label">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic overflow-hidden relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] text-ellipsis whitespace-nowrap" data-node-id="I2076:106177;2005:5191;2512:20909;317:9205">
                Категории записи
              </p>
            </div>
            <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex items-center overflow-clip p-[4px] relative rounded-[8px] shrink-0 w-full" data-node-id="I2076:106177;2005:5191;6504:29375" data-name="⚙️ Input Form">
              <div className="content-stretch flex flex-[1_0_0] items-start min-w-[44px] px-[8px] py-[2px] relative" data-node-id="I2076:106177;2005:5191;6504:29375;6495:23744" data-name="⚙️ Text Slot">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-[rgba(38,38,38,0.26)] text-ellipsis whitespace-nowrap" data-node-id="I2076:106177;2005:5191;6504:29375;6495:23744;5523:18817">
                  Не выбраны
                </p>
              </div>
              <div className="content-stretch flex items-center overflow-clip pr-[4px] py-[4px] relative shrink-0" data-node-id="I2076:106177;2005:5191;6504:29375;6495:23714" data-name="⚙️ Right Slot">
                <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106177;2005:5191;6504:29375;6495:23714;5523:18960" data-name="Chevron Down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown1} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="I2076:106177;2005:5192" data-name="Select">
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-node-id="I2076:106177;2005:5192;2419:44555" data-name="⚙️ Label">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic overflow-hidden relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] text-ellipsis whitespace-nowrap" data-node-id="I2076:106177;2005:5192;2419:44555;317:9205">
                Цвет записи
              </p>
            </div>
            <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex items-center overflow-clip p-[4px] relative rounded-[8px] shrink-0 w-full" data-node-id="I2076:106177;2005:5192;2753:33175" data-name="⚙️ Input Form/Small/Default/On/Off">
              <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="I2076:106177;2005:5192;2753:33175;6495:20263" data-name="⚙️ Left Slot">
                <div className="bg-[#f8eb5f] border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex items-center overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-node-id="I2076:106177;2005:5192;2753:33175;6495:20263;5523:18973" data-name="Avatar">
                  <div className="relative shrink-0 size-[24px]" data-node-id="I2076:106177;2005:5192;2753:33175;6495:20263;5523:18973;2152:8152" data-name="User Photo 11" />
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] items-start min-w-[44px] px-[8px] py-[2px] relative" data-node-id="I2076:106177;2005:5192;2753:33175;6495:20993" data-name=".⚙️ Text Slot">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#262626] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I2076:106177;2005:5192;2753:33175;6495:20993;5523:18820">
                  По умолчанию
                </p>
              </div>
              <div className="content-stretch flex items-center overflow-clip pr-[4px] py-[4px] relative shrink-0" data-node-id="I2076:106177;2005:5192;2753:33175;6495:22859" data-name=".⚙️ Right Slot">
                <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106177;2005:5192;2753:33175;6495:22859;5523:18960" data-name="Chevron Down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[228px]" data-node-id="I2076:106177;2014:5485" data-name="Buttons">
          <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[72px] items-start justify-center min-w-[100px] p-[8px] relative rounded-[8px]" data-node-id="I2076:106177;2014:5486" data-name="🛠️ Button Card">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-h-px overflow-clip relative w-full" data-node-id="I2076:106177;2014:5486;2013:8046" data-name="Slot">
              <div className="relative shrink-0 size-[20px]" data-node-id="I2076:106177;2014:5486;2013:8047" data-name="List">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgList} />
              </div>
              <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[83.5px]" data-node-id="I2076:106177;2014:5486;2013:8048" data-name=".⚙️ Text">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-full" data-node-id="I2076:106177;2014:5486;2013:8049">
                  Расширенные поля
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[72px] items-start justify-center min-w-[100px] p-[8px] relative rounded-[8px]" data-node-id="I2076:106177;2014:5487" data-name="🛠️ Button Card">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-h-px overflow-clip relative w-full" data-node-id="I2076:106177;2014:5487;2013:8046" data-name="Slot">
              <div className="relative shrink-0 size-[20px]" data-node-id="I2076:106177;2014:5487;2013:8047" data-name="List">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRepeat} />
              </div>
              <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[83.5px]" data-node-id="I2076:106177;2014:5487;2013:8048" data-name=".⚙️ Text">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-full" data-node-id="I2076:106177;2014:5487;2013:8049">
                  Повторение записи
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[72px] items-start justify-center min-w-[100px] p-[8px] relative rounded-[8px]" data-node-id="I2076:106177;2014:5488" data-name="🛠️ Button Card">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-h-px overflow-clip relative w-full" data-node-id="I2076:106177;2014:5488;2013:8046" data-name="Slot">
              <div className="relative shrink-0 size-[20px]" data-node-id="I2076:106177;2014:5488;2013:8047" data-name="List">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBell} />
              </div>
              <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[83.5px]" data-node-id="I2076:106177;2014:5488;2013:8048" data-name=".⚙️ Text">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-full whitespace-pre-wrap" data-node-id="I2076:106177;2014:5488;2013:8049">
                  {`Уведомления `}
                  <br aria-hidden />о визите
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[72px] items-start justify-center min-w-[100px] p-[8px] relative rounded-[8px]" data-node-id="I2076:106177;2014:5489" data-name="🛠️ Button Card">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-h-px overflow-clip relative w-full" data-node-id="I2076:106177;2014:5489;2013:8046" data-name="Slot">
              <div className="relative shrink-0 size-[20px]" data-node-id="I2076:106177;2014:5489;2013:8047" data-name="List">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBoxGoods} />
              </div>
              <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[83.5px]" data-node-id="I2076:106177;2014:5489;2013:8048" data-name=".⚙️ Text">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-full" data-node-id="I2076:106177;2014:5489;2013:8049">
                  Списание расходников
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-col h-[72px] items-start justify-center min-w-[100px] p-[8px] relative rounded-[8px] shrink-0 w-[110px]" data-node-id="I2076:106177;2014:5490" data-name="🛠️ Button Card">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-h-px overflow-clip relative w-full" data-node-id="I2076:106177;2014:5490;2013:8046" data-name="Slot">
              <div className="relative shrink-0 size-[20px]" data-node-id="I2076:106177;2014:5490;2013:8047" data-name="List">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgOther} />
              </div>
              <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[83.5px]" data-node-id="I2076:106177;2014:5490;2013:8048" data-name=".⚙️ Text">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-full" data-node-id="I2076:106177;2014:5490;2013:8049">
                  История изменений
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={centerColumnRef} className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-col h-full items-start overflow-y-auto p-[16px] relative rounded-[16px] shrink-0 w-[568px]" data-node-id="2076:106229" data-name="🔴 Wrapper">
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526" data-name="Slot">
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228" data-name="Main Content">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2014:7378" data-name="Chips Layout">
              <div className="bg-[#262626] content-stretch flex items-center min-w-[32px] p-[4px] relative rounded-[8px] shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2014:7293" data-name="Chip">
                <div className="content-stretch flex items-center pl-[4px] py-[4px] relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2014:7293;13525:9964" data-name="Left Slot">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106229;22568:9526;2076:106228;2014:7293;13525:9964;13276:9335" data-name="AI">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2014:7293;13525:12962" data-name="Text Slot">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2014:7293;5820:5004">
                    Ожидание
                  </p>
                </div>
              </div>
              <div className="bg-[rgba(38,38,38,0.07)] content-stretch flex items-center min-w-[32px] p-[4px] relative rounded-[8px] shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2014:7332" data-name="Chip">
                <div className="content-stretch flex items-center pl-[4px] py-[4px] relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2014:7332;13525:8527" data-name="Left Slot">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106229;22568:9526;2076:106228;2014:7332;13525:8527;13276:9335" data-name="AI">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2014:7332;13525:11838" data-name="Text Slot">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] text-center whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2014:7332;5819:4982">
                    Пришел
                  </p>
                </div>
              </div>
              <div className="bg-[rgba(38,38,38,0.07)] content-stretch flex items-center min-w-[32px] p-[4px] relative rounded-[8px] shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2014:7383" data-name="Chip">
                <div className="content-stretch flex items-center pl-[4px] py-[4px] relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2014:7383;13525:8527" data-name="Left Slot">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106229;22568:9526;2076:106228;2014:7383;13525:8527;13276:9335" data-name="AI">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMinus} />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2014:7383;13525:11838" data-name="Text Slot">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] text-center whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2014:7383;5819:4982">
                    Не пришел
                  </p>
                </div>
              </div>
              <div className="bg-[rgba(38,38,38,0.07)] content-stretch flex items-center min-w-[32px] p-[4px] relative rounded-[8px] shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2014:7401" data-name="Chip">
                <div className="content-stretch flex items-center pl-[4px] py-[4px] relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2014:7401;13525:8527" data-name="Left Slot">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106229;22568:9526;2076:106228;2014:7401;13525:8527;13276:9335" data-name="AI">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheck} />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2014:7401;13525:11838" data-name="Text Slot">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] text-center whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2014:7401;5819:4982">
                    Подтвердил
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(38,38,38,0.03)] content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2075:66186" data-name="Summary">
              <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990" data-name="🔴 Wrapper">
                <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242" data-name="Slot">
                  <div className="content-stretch flex gap-[4px] items-start pl-[8px] relative shrink-0 w-[228px]" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106201" data-name="🛠️ Subheader">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[12px] text-[rgba(38,38,38,0.6)]" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106201;2015:5689">
                      <p>
                        <span className="leading-[16px]">{`Наталья М `}</span>
                        <span className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic">·</span>
                        <span className="leading-[16px]">{` 1 час`}</span>
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106204" data-name="🟡 Collapse">
                    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px pl-[8px] pr-[12px] py-[4px] relative rounded-[8px]" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106204;22342:9768" data-name="Layout">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px pr-[12px] relative" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106204;22404:17222" data-name="↪ Text">
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106204;22404:17222;22404:17135" data-name="Title">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#262626] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106204;22404:17222;22404:17136">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">{appointment.service}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center self-stretch" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106204;22385:36375">
                        <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0" data-name="Slot Main">
                          <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106204;22385:36375;2076:106203" data-name=".⚙️ Presets">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106204;22385:36375;2076:106203;22410:18491" data-name="Layout">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[14px] text-right whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106204;22385:36375;2076:106203;22410:18494">
                                <ServicePrice amount={1500} discount={serviceDiscount(1500)} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center pl-[12px] relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106204;22410:19101" data-name="↪ Last Cell">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106204;22410:19101;22480:37757" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106205">
                    <div className="-scale-y-100 flex-none w-full">
                      <div className="h-px relative w-full" data-name="🛠️ Separation">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSeparation} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106208" data-name="🟡 Collapse">
                    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px pl-[8px] pr-[12px] py-[4px] relative rounded-[8px]" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106208;22342:9768" data-name="Layout">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px pr-[12px] relative" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106208;22404:17222" data-name="↪ Text">
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106208;22404:17222;22404:17135" data-name="Title">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#262626] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106208;22404:17222;22404:17136">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">Стрижка для мальчиков / сложная</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center self-stretch" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106208;22385:36375">
                        <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0" data-name="Slot Main">
                          <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106208;22385:36375;2076:106207" data-name=".⚙️ Presets">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106208;22385:36375;2076:106207;22410:18491" data-name="Layout">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[14px] text-right whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106208;22385:36375;2076:106207;22410:18494">
                                <ServicePrice amount={2200} discount={serviceDiscount(2200)} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center pl-[12px] relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106208;22410:19101" data-name="↪ Last Cell">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106208;22410:19101;22480:37757" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106209">
                    <div className="-scale-y-100 flex-none w-full">
                      <div className="h-px relative w-full" data-name="🛠️ Separation">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSeparation} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106212" data-name="🟡 Collapse">
                    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px pl-[8px] pr-[12px] py-[4px] relative rounded-[8px]" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106212;22342:9768" data-name="Layout">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px pr-[12px] relative" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106212;22404:17222" data-name="↪ Text">
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106212;22404:17222;22404:17135" data-name="Title">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#262626] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106212;22404:17222;22404:17136">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">Стрижка для мальчиков / под 1 насадку</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center self-stretch" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106212;22385:36375">
                        <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0" data-name="Slot Main">
                          <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106212;22385:36375;2076:106211" data-name=".⚙️ Presets">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106212;22385:36375;2076:106211;22410:18491" data-name="Layout">
                              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[14px] text-right whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106212;22385:36375;2076:106211;22410:18494">
                                <ServicePrice amount={800} discount={serviceDiscount(800)} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center pl-[12px] relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106212;22410:19101" data-name="↪ Last Cell">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106229;22568:9526;2076:106228;2016:15990;22357:26242;2076:106212;22410:19101;22480:37757" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2042:48969" data-name="🔴 Wrapper">
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2042:48969;22357:26242" data-name="Slot">
                <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2042:48969;22357:26242;2076:106227" data-name="🟡 Collapse">
                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px pl-[8px] pr-[12px] py-[4px] relative rounded-[8px]" data-node-id="I2076:106229;22568:9526;2076:106228;2042:48969;22357:26242;2076:106227;22342:9768" data-name="Layout">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px pr-[12px] relative" data-node-id="I2076:106229;22568:9526;2076:106228;2042:48969;22357:26242;2076:106227;22404:17222" data-name="↪ Text">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2042:48969;22357:26242;2076:106227;22404:17222;22404:17135" data-name="Title">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#262626] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2042:48969;22357:26242;2076:106227;22404:17222;22404:17136">
                          <p className="leading-[20px] overflow-hidden text-ellipsis">Шаума шампунь</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2042:48969;22357:26242;2076:106227;22404:17222;22404:17230" data-name="Annotation">
                        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[12px] text-[rgba(38,38,38,0.6)] text-ellipsis whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2042:48969;22357:26242;2076:106227;22404:17222;22404:17139">
                          <p className="leading-[16px] overflow-hidden text-ellipsis">Наталья М</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center self-stretch" data-node-id="I2076:106229;22568:9526;2076:106228;2042:48969;22357:26242;2076:106227;22385:36375">
                      <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0" data-name="Slot Main">
                        <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2042:48969;22357:26242;2076:106227;22385:36375;2076:106226" data-name=".⚙️ Presets">
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2042:48969;22357:26242;2076:106227;22385:36375;2076:106226;22410:18491" data-name="Layout">
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[14px] text-right whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2042:48969;22357:26242;2076:106227;22385:36375;2076:106226;22410:18494">
                              <ServicePrice amount={500} discount={productDiscount} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center pl-[12px] relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2042:48969;22357:26242;2076:106227;22410:19101" data-name="↪ Last Cell">
                      <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106229;22568:9526;2076:106228;2042:48969;22357:26242;2076:106227;22410:19101;22480:37757" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(38,38,38,0.03)] content-stretch flex flex-col items-start p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155" data-name="🔴 Wrapper">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941" data-name="Slot">
                <div className="bg-[rgba(38,38,38,0.03)] border border-[rgba(38,38,38,0.05)] border-solid content-stretch flex gap-[2px] items-center overflow-clip p-[2px] relative rounded-[8px] shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106180" data-name="Segment control">
                  <div className="bg-white content-stretch drop-shadow-[0px_2px_12px_rgba(0,0,0,0.08)] flex flex-[1_0_0] gap-[4px] h-[28px] items-center justify-center min-w-[95px] px-[12px] py-[4px] relative rounded-[6px]" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106180;2005:1585" data-name="Segment">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106180;2005:1585;2005:3161" data-name="Info">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBellService} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] text-center whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106180;2005:1585;2005:3162">
                      Услуги
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[28px] items-center justify-center min-w-[95px] px-[12px] py-[4px] relative rounded-[8px]" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106180;2005:1586" data-name="Segment">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106180;2005:1586;2005:3155" data-name="Info">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBoxGoods1} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] text-center whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106180;2005:1586;2005:3156">
                      Товары
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106181" data-name="Search field">
                  <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex items-center overflow-clip p-[4px] relative rounded-[8px] shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106181;2997:67864" data-name="⚙️ Input Form">
                    <div className="content-stretch flex items-center overflow-clip pl-[8px] py-[4px] relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106181;2997:67864;6495:20263" data-name="⚙️ Left Slot">
                      <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106181;2997:67864;6495:20263;5523:18986" data-name="Umbrella">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearch} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px px-[8px] py-[2px] relative" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106181;2997:67864;6495:20993" data-name="⚙️ Text Slot">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic overflow-hidden relative text-[14px] text-[rgba(38,38,38,0.26)] text-ellipsis whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106181;2997:67864;6495:20993;5523:18817">
                        Поиск по услугам
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106182" data-name="Layout">
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106183" data-name="Subheader">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#262626] text-[12px]" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106185">
                      <p className="leading-[16px]">Популярные услуги: {appointment.master}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106186" data-name="Services">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[168px]" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106190" data-name="🛠️ Services">
                      <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-col items-start p-[12px] relative rounded-[12px] shrink-0 w-[168px]" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106190;2014:9185" data-name="🔴 Wrapper">
                        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106190;2014:9185;22357:39088" data-name="Slot">
                          <div className="content-stretch flex items-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106190;2014:9185;22357:39088;2076:106188" data-name="🟡 Basic Card">
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-[40px] min-w-px relative" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106190;2014:9185;22357:39088;2076:106188;13135:18208" data-name=".⚙️ Text">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106190;2014:9185;22357:39088;2076:106188;13135:18208;12110:8331" data-name="Title">
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[#262626] text-[14px]" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106190;2014:9185;22357:39088;2076:106188;13135:18208;12110:8332">{`Комплекс: Маникюр + Педикюр `}</p>
                              </div>
                              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-[rgba(38,38,38,0.6)] w-[min-content]" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106190;2014:9185;22357:39088;2076:106188;13135:18208;12110:8335">
                                <span className="leading-[16px] text-[12px]">{`1 ч 30 мин · `}</span>
                                <span className="leading-[16px] text-[12px]">{price(3600)}</span>
                              </p>
                            </div>
                            <Right className="h-[24px] relative shrink-0 w-[0.5px]" />
                          </div>
                          <div className="content-end flex flex-wrap gap-[4px] h-[46px] items-end pt-[8px] relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106190;2014:9185;22357:39088;2076:106189" data-name=".Slot">
                            <div className="bg-[rgba(38,38,38,0.07)] content-stretch flex gap-[2px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106190;2014:9185;22357:39088;2076:106189;21542:72827" data-name="Tag">
                              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[#262626] text-[11px] whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106190;2014:9185;22357:39088;2076:106189;21542:72827;1845:21957">
                                Комплекс
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[128px] items-start min-w-px p-[12px] relative rounded-[12px]" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106194" data-name="🔴 Wrapper">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106194;22357:39088" data-name="Slot">
                        <div className="content-stretch flex items-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106194;22357:39088;2076:106192" data-name="🟡 Basic Card">
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-[40px] min-w-px relative" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106194;22357:39088;2076:106192;13135:18208" data-name=".⚙️ Text">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106194;22357:39088;2076:106192;13135:18208;12110:8331" data-name="Title">
                              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[#262626] text-[14px]" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106194;22357:39088;2076:106192;13135:18208;12110:8332">
                                Сложное окрашивание
                              </p>
                            </div>
                            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-[rgba(38,38,38,0.6)] w-[min-content]" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106194;22357:39088;2076:106192;13135:18208;12110:8335">
                              <span className="leading-[16px] text-[12px]">{`1 ч 30 мин · `}</span>
                              <span className="leading-[16px] text-[12px]">{price(3600)}</span>
                            </p>
                          </div>
                          <Right className="h-[24px] relative shrink-0 w-[0.5px]" />
                        </div>
                        <div className="content-end flex flex-wrap gap-[4px] items-end pt-[8px] relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106194;22357:39088;2076:106193" data-name=".Slot">
                          <div className="bg-[rgba(248,188,59,0.2)] content-stretch flex gap-[2px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106194;22357:39088;2076:106193;21453:32288" data-name="Tag">
                            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[#262626] text-[11px] whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106194;22357:39088;2076:106193;21453:32288;1845:21949">
                              Часто посещает
                            </p>
                          </div>
                          <div className="bg-[rgba(102,68,224,0.1)] content-stretch flex gap-[2px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106194;22357:39088;2076:106193;21542:72861" data-name="Tag">
                            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[#6644e0] text-[11px] whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106194;22357:39088;2076:106193;21542:72861;1845:21997">
                              Последний визит
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[128px] items-start min-w-px p-[12px] relative rounded-[12px]" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106198" data-name="🔴 Wrapper">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106198;22357:39088" data-name="Slot">
                        <div className="content-stretch flex items-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106198;22357:39088;2076:106196" data-name="🟡 Basic Card">
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-[40px] min-w-px relative" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106198;22357:39088;2076:106196;13135:18208" data-name=".⚙️ Text">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106198;22357:39088;2076:106196;13135:18208;12110:8331" data-name="Title">
                              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[#262626] text-[14px]" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106198;22357:39088;2076:106196;13135:18208;12110:8332">
                                {appointment.service}
                              </p>
                            </div>
                            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-[rgba(38,38,38,0.6)] w-[min-content]" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106198;22357:39088;2076:106196;13135:18208;12110:8335">
                              <span className="leading-[16px] text-[12px]">{`1 ч 30 мин · `}</span>
                              <span className="leading-[16px] text-[12px]">{price(3600)}</span>
                            </p>
                          </div>
                          <Right className="h-[24px] relative shrink-0 w-[0.5px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106199" data-name="🟡 Collapse">
                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px pl-[8px] pr-[12px] py-[4px] relative rounded-[8px]" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106199;22342:9768" data-name="Layout">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px pr-[12px] relative" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106199;22404:17222" data-name="↪ Text">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106199;22404:17222;22404:17135" data-name="Title">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#262626] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106199;22404:17222;22404:17136">
                          <p className="leading-[20px] overflow-hidden text-ellipsis">Все услуги</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106199;22385:36375">
                      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Slot Main" />
                    </div>
                    <div className="content-stretch flex items-center pl-[12px] relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106199;22410:19101" data-name="↪ Last Cell">
                      <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106229;22568:9526;2076:106228;2014:10155;22633:25941;2076:106199;22410:19101;22480:37757" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div ref={paymentBlockRef} className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-col items-start p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865" data-name="🔴 Wrapper">
              <div className="content-stretch flex flex-col items-start overflow-visible relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524" data-name="Slot">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223" data-name="Payment Layout">
                  <div className="content-stretch flex gap-[4px] h-[32px] items-center relative shrink-0 w-[512px]" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52862" data-name="Summary">
                    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-end min-w-px relative" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52863" data-name="К оплате">
                      <div className="content-stretch flex items-center justify-center pb-px relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2075:65800" data-name="Wrap">
                        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(38,38,38,0.6)] whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52864">
                          К оплате
                        </p>
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[26px] not-italic relative shrink-0 text-[#262626] text-[20px] whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52865">{totalPrice}</p>
                    </div>
                    <PromoAutocomplete
                      value={promoInput}
                      open={promoOpen && promoAnchor === 'main'}
                      options={filteredPromoCodes}
                      onChange={updatePromoInput}
                      onFocus={() => { setPromoAnchor('main'); setPromoOpen(true); }}
                      onClose={() => setPromoOpen(false)}
                      onClear={() => { updatePromoInput(''); setPromoAnchor('main'); }}
                      onSelect={selectPromo}
                    />
                  </div>
                  <SpaceBlock className="h-[12px] relative shrink-0 w-full" size="12" />
                  <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52527">
                    <div className="-scale-y-100 flex-none w-full">
                      <div className="h-px relative w-full" data-name="Separation">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSeparation1} />
                      </div>
                    </div>
                  </div>
                  <SpaceBlock className="h-[4px] relative shrink-0 w-full" />
                  <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52528" data-name="Header">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-w-px relative" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52529" data-name="🛠️ Subheader">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#262626] text-[12px]" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52529;2015:5689">
                        <p className="leading-[16px]">Быстрая оплата</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52530" data-name="Button Dropdown">
                      <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52530;4124:7460" data-name="Left Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLeftIcon2} />
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52530;4124:7461">
                        Настроить
                      </p>
                    </div>
                  </div>
                  <SpaceBlock className="h-[4px] relative shrink-0 w-full" />
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52531" data-name="Layout">
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52532">
                      <div className="bg-white border border-[#ffcb00] border-solid content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative rounded-[8px]" data-name="🔴 Wrapper">
                        <div className="content-stretch flex flex-col items-start overflow-clip px-[12px] relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52532;22568:9591" data-name="Slot">
                          <div className="content-stretch flex items-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52532;22568:9591;2076:106215" data-name="🟡 Basic Card">
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-[40px] min-w-px relative" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52532;22568:9591;2076:106215;13135:18208" data-name=".⚙️ Text">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52532;22568:9591;2076:106215;13135:18208;12110:8331" data-name="Title">
                                <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52532;22568:9591;2076:106215;13135:18208;12733:25622" data-name="Discount, Promotion">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCards} />
                                </div>
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[#262626] text-[14px]" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52532;22568:9591;2076:106215;13135:18208;12110:8332">
                                  Карта
                                </p>
                              </div>
                            </div>
                            <Right className="h-[24px] relative shrink-0 w-[0.5px]" />
                          </div>
                          <div className="h-[32px] relative shrink-0 w-[118px]" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52532;22568:9591;2076:106216" data-name="-12 margin">
                            <div className="absolute content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] right-[-10px] rounded-[8px] top-0" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52532;22568:9591;2076:106217" data-name="🟢 Button Dropdown">
                              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52532;22568:9591;2076:106217;4124:7461">
                                Расчетный счет
                              </p>
                              <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52532;22568:9591;2076:106217;4124:7462" data-name="Right Icon">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRightIcon} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52533">
                      <div className="bg-white border border-[#ffcb00] border-solid content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative rounded-[8px]" data-name="🔴 Wrapper">
                        <div className="content-stretch flex flex-col items-start overflow-clip px-[12px] relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52533;22568:9591" data-name="Slot">
                          <div className="content-stretch flex items-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52533;22568:9591;2076:106219" data-name="🟡 Basic Card">
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-[40px] min-w-px relative" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52533;22568:9591;2076:106219;13135:18208" data-name=".⚙️ Text">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52533;22568:9591;2076:106219;13135:18208;12110:8331" data-name="Title">
                                <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52533;22568:9591;2076:106219;13135:18208;12733:25622" data-name="Discount, Promotion">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWallet} />
                                </div>
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[#262626] text-[14px]" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52533;22568:9591;2076:106219;13135:18208;12110:8332">
                                  Наличные
                                </p>
                              </div>
                            </div>
                            <Right className="h-[24px] relative shrink-0 w-[0.5px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[96px] items-start min-w-px relative rounded-[8px] cursor-pointer" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52534" data-name="🔴 Wrapper" onClick={() => setShowPaymentScreen(true)}>
                      <div className="content-stretch flex flex-col items-start overflow-clip px-[12px] relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52534;22357:39203" data-name="Slot">
                        <div className="content-stretch flex items-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52534;22357:39203;2076:106221" data-name="🟡 Basic Card">
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-[40px] min-w-px relative" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52534;22357:39203;2076:106221;13135:18208" data-name=".⚙️ Text">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52534;22357:39203;2076:106221;13135:18208;12110:8331" data-name="Title">
                              <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52534;22357:39203;2076:106221;13135:18208;12733:25622" data-name="Discount, Promotion">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPaymentCard} />
                              </div>
                              <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[#262626] text-[14px]" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:52534;22357:39203;2076:106221;13135:18208;12110:8332">
                                Все способы
                              </p>
                            </div>
                          </div>
                          <Right className="h-[24px] relative shrink-0 w-[0.5px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <SpaceBlock className="h-[12px] relative shrink-0 w-full" size="12" />
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:55440" data-name="Checkbox">
                    <div className="relative shrink-0 size-[20px]" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:55440;1176:10421" data-name=".Checkbox_on_S">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:55440;1176:10421;1173:6487" data-name="Checkbox">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheckbox} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:55440;1169:1499" data-name="Content">
                      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:55440;1169:1500" data-name="Header">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[14px] whitespace-nowrap" data-node-id="I2076:106229;22568:9526;2076:106228;2043:55865;22568:9524;2076:106223;2043:55440;1169:1501">
                          <p className="leading-[20px]">Распечатать фискальный чек</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-col h-full items-start overflow-x-clip overflow-y-auto p-[16px] relative rounded-[16px] shrink-0 w-[340px]" data-node-id="2076:106234" data-name="🔴 Wrapper">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120" data-name="Slot">
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233" data-name="Client info">
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14879" data-name="Client">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2045:67284" data-name="Header">
                <div className="h-[32px] relative shrink-0 w-[135px]" data-node-id="I2076:106234;22357:39120;2076:106233;2006:17744" data-name="-12 margin">
                  <div className="absolute content-stretch flex gap-[4px] items-center justify-center left-[-12px] px-[12px] py-[8px] rounded-[8px] top-0" data-node-id="I2076:106234;22357:39120;2076:106233;2006:17508" data-name="Button">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106234;22357:39120;2076:106233;2006:17508;756:20990" data-name="Left Icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLeftIcon3} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] whitespace-nowrap" data-node-id="I2076:106234;22357:39120;2076:106233;2006:17508;756:20991">
                      Сменить клиента
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2006:17442" data-name="Tabs">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-w-px p-[12px] relative" data-node-id="I2076:106234;22357:39120;2076:106233;2006:17443" data-name="Tab">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[14px] whitespace-nowrap" data-node-id="I2076:106234;22357:39120;2076:106233;2006:17443;8656:6680">
                      <p className="leading-[20px]">Клиент</p>
                    </div>
                    <div className="absolute bottom-0 h-[2px] left-0 right-0" data-node-id="I2076:106234;22357:39120;2076:106233;2006:17443;8656:6682" data-name="Line">
                      <div className="absolute inset-[-100%_0_0_0]">
                        <img alt="" className="block max-w-none size-full" src={imgLine} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-w-px p-[12px] relative" data-node-id="I2076:106234;22357:39120;2076:106233;2006:17444" data-name="Tab">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(38,38,38,0.6)] whitespace-nowrap" data-node-id="I2076:106234;22357:39120;2076:106233;2006:17444;8667:12668">
                      <p className="leading-[20px]">Чат</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60063" data-name="Client">
                <div className="content-stretch flex items-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60064" data-name="🟡 Basic Card">
                  <div className="content-stretch flex items-start pr-[12px] relative shrink-0" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60064;13135:18207" data-name=".⚙️ Left">
                    <div className="content-stretch flex items-center overflow-clip relative rounded-[12px] shrink-0 size-[48px]" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60064;13135:18207;12096:19943" data-name="Avatar">
                      <div className="relative shrink-0 size-[48px]" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60064;13135:18207;12096:19943;12160:10348" data-name="User Photo 13">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUserPhoto13} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60064;13135:18208" data-name="⚙️ Text">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60064;13135:18208;12110:4647" data-name="Title">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[#262626] text-[16px]" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60064;13135:18208;12110:4648">
                        {appointment.client}
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60064;13135:18208;23569:22561" data-name="Annotation">
                      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(38,38,38,0.6)] whitespace-nowrap" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60064;13135:18208;12110:4651">
                        +7 903 204-33-44
                      </p>
                      <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60064;13135:18208;23569:23937" data-name="↪ Annotation Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCopy} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60064;13135:18209" data-name=".⚙️ Right">
                    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-end pl-[8px] py-[6px] relative shrink-0" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60064;13135:18209;22496:10837" data-name="Icon Container">
                      <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60064;13135:18209;22496:10838" data-name="🟡 Icon Button">
                        <div className="relative shrink-0 size-[20px]" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60064;13135:18209;22496:10838;755:26533" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60064;13135:18209;22496:10839" data-name="🟡 Icon Button">
                        <div className="relative shrink-0 size-[20px]" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60064;13135:18209;22496:10839;755:26533" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60065" data-name="Buttons">
                  <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[72px] items-start justify-center min-w-[94px] p-[8px] relative rounded-[8px]" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60066" data-name="🛠️ Button Card">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-h-px overflow-clip relative w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60066;2013:8046" data-name="Slot">
                      <div className="relative shrink-0 size-[20px]" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60066;2013:8047" data-name="List">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArchive} />
                      </div>
                      <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[83.5px]" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60066;2013:8048" data-name=".⚙️ Text">
                        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60066;2013:8049">
                          История посещений
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[72px] items-start justify-center min-w-[94px] p-[8px] relative rounded-[8px]" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60067" data-name="🛠️ Button Card">
                    <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-center justify-center overflow-clip relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60067;2013:8046" data-name="Slot">
                      <div className="relative shrink-0 size-[20px]" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60067;2013:8047" data-name="List">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLoyaltyLoyaltyCard} />
                      </div>
                      <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[83.5px]" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60067;2013:8048" data-name=".⚙️ Text">
                        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60067;2013:8049">
                          Лояльность
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[72px] items-start justify-center min-w-[94px] p-[8px] relative rounded-[8px]" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60068" data-name="🛠️ Button Card">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-h-px overflow-clip relative w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60068;2013:8046" data-name="Slot">
                      <div className="relative shrink-0 size-[20px]" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60068;2013:8047" data-name="List">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAnalytics} />
                      </div>
                      <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[83.5px]" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60068;2013:8048" data-name=".⚙️ Text">
                        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60068;2013:8049">
                          Статистика
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[72px] items-start justify-center min-w-[94px] p-[8px] relative rounded-[8px]" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60069" data-name="🛠️ Button Card">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-h-px overflow-clip relative w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60069;2013:8046" data-name="Slot">
                      <div className="relative shrink-0 size-[20px]" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60069;2013:8047" data-name="List">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSupportContact} />
                      </div>
                      <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[83.5px]" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60069;2013:8048" data-name=".⚙️ Text">
                        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60069;2013:8049">
                          Сообщения
                          <br aria-hidden />и звонки
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[72px] items-start justify-center min-w-[94px] p-[8px] relative rounded-[8px]" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60070" data-name="🛠️ Button Card">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-h-px overflow-clip relative w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60070;2013:8046" data-name="Slot">
                      <div className="relative shrink-0 size-[20px]" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60070;2013:8047" data-name="List">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWorkCase} />
                      </div>
                      <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[83.5px]" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60070;2013:8048" data-name=".⚙️ Text">
                        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60070;2013:8049">
                          Счета клиента
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[72px] items-start justify-center min-w-[94px] p-[8px] relative rounded-[8px]" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60071" data-name="🛠️ Button Card">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-h-px overflow-clip relative w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60071;2013:8046" data-name="Slot">
                      <div className="relative shrink-0 size-[20px]" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60071;2013:8047" data-name="List">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFolder} />
                      </div>
                      <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[83.5px]" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60071;2013:8048" data-name=".⚙️ Text">
                        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2047:60071;2013:8049">
                          Файлы
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-start flex flex-wrap gap-[4px] items-start relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14888" data-name="tags">
                <div className="bg-[rgba(227,79,47,0.1)] content-stretch flex gap-[2px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14889" data-name="Tag">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[#e34f2f] text-[11px] whitespace-nowrap" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14889;1845:21965">
                    Сотрудник важен
                  </p>
                </div>
                <div className="bg-[rgba(47,83,227,0.1)] content-stretch flex gap-[2px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14890" data-name="Tag">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[#2f53e3] text-[11px] whitespace-nowrap" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14890;1845:21989">
                    amoCRM
                  </p>
                </div>
                <div className="bg-[rgba(33,148,100,0.1)] content-stretch flex gap-[2px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14891" data-name="Tag">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[#219464] text-[11px] whitespace-nowrap" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14891;1845:21973">
                    Лояльный
                  </p>
                </div>
                <div className="bg-[rgba(102,68,224,0.1)] content-stretch flex gap-[2px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14892" data-name="Tag">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[#6644e0] text-[11px] whitespace-nowrap" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14892;1845:21997">
                    Не посещал 24 дня
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14893" data-name="Checkbox">
                <CheckboxOffS className="relative shrink-0 size-[20px]" />
                <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14893;1169:1385" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14893;1169:1386" data-name="Header">
                    <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[14px] whitespace-nowrap" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14893;1169:1387">
                      <p className="leading-[20px]">Записывает другого посетителя</p>
                    </div>
                    <div className="relative shrink-0 size-[20px]" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14893;1169:1388" data-name="Icon">
                      <div className="absolute left-[2px] size-[16px] top-[2px]" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14893;1169:1389" data-name="Info">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgInfo1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14894" data-name="Extra info">
              <div className="content-stretch flex gap-[8px] items-start pb-[8px] relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2006:17522" data-name="Header">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I2076:106234;22357:39120;2076:106233;2006:17522;6028:71888" data-name="Label">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[217px]" data-node-id="I2076:106234;22357:39120;2076:106233;2006:17522;6028:71889" data-name="Head">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] min-w-px not-italic relative text-[#262626] text-[16px]" data-node-id="I2076:106234;22357:39120;2076:106233;2006:17522;6028:71890">
                      <p className="leading-[22px]">Дополнительно</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2006:17556" data-name="Layout">
                <div className="h-[56px] relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2006:17676" data-name="-8 margin">
                  <div className="absolute content-stretch flex flex-col items-start left-[-8px] p-[8px] rounded-[8px] top-0 w-[332px]" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14896" data-name="🔴 Wrapper">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14896;23565:10385" data-name="Slot">
                      <div className="content-stretch flex items-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14896;23565:10385;2076:106232" data-name="🟡 Basic Card">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14896;23565:10385;2076:106232;13135:18208" data-name=".⚙️ Text">
                          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] whitespace-nowrap" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14896;23565:10385;2076:106232;13135:18208;12110:8330">
                            Дополнительный телефон
                          </p>
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14896;23565:10385;2076:106232;13135:18208;12110:8331" data-name="Title">
                            <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[#262626] text-[14px]" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14896;23565:10385;2076:106232;13135:18208;12110:8332">
                              -
                            </p>
                          </div>
                        </div>
                        <Right className="h-[24px] relative shrink-0 w-[0.5px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[32px] relative shrink-0 w-[166px]" data-node-id="I2076:106234;22357:39120;2076:106233;2006:17662" data-name="-12 margin">
                  <div className="absolute content-stretch flex gap-[4px] items-center justify-center left-[-12px] px-[12px] py-[8px] rounded-[8px] top-0" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14895" data-name="Button">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14895;756:20990" data-name="Left Icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLeftIcon4} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] whitespace-nowrap" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14895;756:20991">
                      Добавить примечание
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14897" data-name="Details">
              <div className="content-stretch flex gap-[8px] items-start pb-[16px] relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14898" data-name="Header">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14898;6028:71888" data-name="Label">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[217px]" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14898;6028:71889" data-name="Head">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] min-w-px not-italic relative text-[#262626] text-[16px]" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14898;6028:71890">
                      <p className="leading-[22px]">Статистика</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-start flex flex-wrap gap-[12px_4px] items-start relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14899" data-name="Layout">
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-[40px] min-w-[146px] relative" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14900" data-name="🟡 Basic Card">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-[40px] min-w-px relative" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14900;13135:18208" data-name=".⚙️ Text">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] whitespace-nowrap" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14900;13135:18208;12110:8330">
                      Последний визит
                    </p>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14900;13135:18208;12110:8331" data-name="Title">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[#262626] text-[14px]" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14900;13135:18208;12110:8332">
                        17.03 16:14
                      </p>
                    </div>
                  </div>
                  <Right className="h-[24px] relative shrink-0 w-[0.5px]" />
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-[40px] min-w-[146px] relative" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14901" data-name="🟡 Basic Card">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-[40px] min-w-px relative" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14901;13135:18208" data-name=".⚙️ Text">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] whitespace-nowrap" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14901;13135:18208;12110:8330">
                      Не пришел
                    </p>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14901;13135:18208;12110:8331" data-name="Title">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[#262626] text-[14px]" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14901;13135:18208;12110:8332">
                        4 раза
                      </p>
                    </div>
                  </div>
                  <Right className="h-[24px] relative shrink-0 w-[0.5px]" />
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-[40px] min-w-[146px] relative" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14902" data-name="🟡 Basic Card">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-[40px] min-w-px relative" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14902;13135:18208" data-name=".⚙️ Text">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] whitespace-nowrap" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14902;13135:18208;12110:8330">
                      Баланс
                    </p>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14902;13135:18208;12110:8331" data-name="Title">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[#262626] text-[14px]" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14902;13135:18208;12110:8332">
                        -107 000 ₽
                      </p>
                    </div>
                  </div>
                  <Right className="h-[24px] relative shrink-0 w-[0.5px]" />
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-[40px] min-w-[146px] relative" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14903" data-name="🟡 Basic Card">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-[40px] min-w-px relative" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14903;13135:18208" data-name=".⚙️ Text">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] whitespace-nowrap" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14903;13135:18208;12110:8330">
                      Продано
                    </p>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14903;13135:18208;12110:8331" data-name="Title">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[#262626] text-[14px]" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14903;13135:18208;12110:8332">
                        379 800 ₽
                      </p>
                    </div>
                  </div>
                  <Right className="h-[24px] relative shrink-0 w-[0.5px]" />
                </div>
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-[40px] min-w-[146px] relative" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14904" data-name="🟡 Basic Card">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-[40px] min-w-px relative" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14904;13135:18208" data-name=".⚙️ Text">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] whitespace-nowrap" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14904;13135:18208;12110:8330">
                      Оплачено
                    </p>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14904;13135:18208;12110:8331" data-name="Title">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[#262626] text-[14px]" data-node-id="I2076:106234;22357:39120;2076:106233;2006:14904;13135:18208;12110:8332">
                        4 раза
                      </p>
                    </div>
                  </div>
                  <Right className="h-[24px] relative shrink-0 w-[0.5px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#f3f3f3] bottom-0 content-stretch flex flex-col items-start justify-center left-0 p-[16px] right-0" data-node-id="2076:106235" data-name="Action Footer">
        <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-node-id="I2076:106235;13483:10549" data-name="Content">
          <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-[670px]" data-node-id="I2076:106235;13483:12314" data-name="Button Align">
            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-w-px relative" data-node-id="I2076:106235;13483:12314;13483:12737" data-name="Main">
              <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="I2076:106235;13483:12314;13483:11640" data-name="Button">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] whitespace-nowrap" data-node-id="I2076:106235;13483:12314;13483:11640;8884:30282">
                  Удалить запись
                </p>
              </div>
              <div className="bg-[#ffcb00] content-stretch flex cursor-pointer gap-[4px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="I2076:106235;13483:12314;13483:11641" data-name="Button" onClick={onClose}>
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] whitespace-nowrap" data-node-id="I2076:106235;13483:12314;13483:11641;756:20969">
                  Сохранить запись
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!isPaymentBlockVisible && <div className="-translate-x-1/2 absolute bg-white border border-[rgba(38,38,38,0.15)] border-solid bottom-[64px] content-stretch flex flex-col items-start left-[calc(50%-48px)] p-[16px] rounded-[16px] w-[568px]" data-node-id="2076:106238" data-name="🔴 Wrapper">
        <div className="content-stretch flex flex-col items-start overflow-visible relative shrink-0 w-full" data-node-id="I2076:106238;22568:9526" data-name="Slot">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I2076:106238;22568:9526;2076:107173" data-name="Payment Layout">
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="I2076:106238;22568:9526;2076:107174" data-name="Summary">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-start min-w-px relative" data-node-id="I2076:106238;22568:9526;2076:107175" data-name="К оплате">
                <div className="content-stretch flex items-center justify-center pb-px relative shrink-0" data-node-id="I2076:106238;22568:9526;2076:107177" data-name="Wrap">
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(38,38,38,0.6)] whitespace-nowrap" data-node-id="I2076:106238;22568:9526;2076:107178">
                    К оплате
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[26px] not-italic relative shrink-0 text-[#262626] text-[20px] whitespace-nowrap" data-node-id="I2076:106238;22568:9526;2076:107179">{totalPrice}</p>
              </div>
              <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex cursor-pointer gap-[4px] items-center justify-end px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="I2076:106238;22568:9526;2076:107180" data-name="Button" onClick={() => paymentBlockRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] whitespace-nowrap" data-node-id="I2076:106238;22568:9526;2076:107180;8884:30282">
                  Оплатить
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>}
      {showPaymentScreen && (
        <div className="absolute inset-0 z-[100] animate-[payment-slide-in_280ms_cubic-bezier(0.22,1,0.36,1)]">
          <PaymentScreen
            onClose={() => setShowPaymentScreen(false)}
            selectedPromo={selectedPromo}
            discount={discount}
            promoField={(
              <PromoAutocomplete
                value={promoInput}
                open={promoOpen && promoAnchor === 'payment'}
                options={filteredPromoCodes}
                onChange={updatePromoInput}
                onFocus={() => { setPromoAnchor('payment'); setPromoOpen(true); }}
                onClose={() => setPromoOpen(false)}
                onClear={() => { updatePromoInput(''); setPromoAnchor('payment'); }}
                onSelect={selectPromo}
                className="w-full"
              />
            )}
          />
        </div>
      )}
    </div>
  );
}
