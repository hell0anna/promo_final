import type { ReactNode } from 'react';

const assetPathPrefix = `${import.meta.env.BASE_URL}assets/payment`.replace(/\/+/g, '/');
const imgSeparation = `${assetPathPrefix}/44377.svg`;
const imgCheckbox = `${assetPathPrefix}/c850c.svg`;
const imgLine = `${assetPathPrefix}/b1b8b.svg`;
const imgPaymentCard = `${assetPathPrefix}/4f2f6.svg`;
const imgRightIcon = `${assetPathPrefix}/7fd41.svg`;
const imgWallet = `${assetPathPrefix}/41a60.svg`;
const imgDiscountPromotion = `${assetPathPrefix}/0e199.svg`;
const imgIcon = `${assetPathPrefix}/45bc9.svg`;
const imgQrCode = `${assetPathPrefix}/07fd6.svg`;
const imgRightIcon1 = `${assetPathPrefix}/43cbe.svg`;
const imgAttachLink = `${assetPathPrefix}/b6228.svg`;
const imgAnalyticsPieChart = `${assetPathPrefix}/ff6e0.svg`;

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

function PaymentServicePrice({ amount, discount }: { amount: number; discount: number }) {
  const format = (value: number) => `${Math.round(value).toLocaleString('ru-RU')} ₽`;

  if (!discount) {
    return <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[#262626] text-[14px] whitespace-nowrap">{format(amount)}</p>;
  }

  return (
    <div className="flex items-start gap-[8px]">
      <div className="rounded-[4px] bg-[#edf7f3] px-[4px] py-[2px] font-['Inter:Medium'] text-[11px] font-medium leading-[14px] text-[#159570]">
        −{Math.round(discount * 100)}%
      </div>
      <div className="flex flex-col items-end">
        <p className="font-['Inter:Regular'] text-[14px] leading-[20px] text-[#262626]">{format(amount * (1 - discount))}</p>
        <p className="font-['Inter:Regular'] text-[12px] leading-[16px] text-[rgba(38,38,38,0.6)] line-through">{format(amount)}</p>
      </div>
    </div>
  );
}

export default function PaymentScreen({
  onClose,
  promoField,
  selectedPromo,
  discount,
}: {
  onClose: () => void;
  promoField: ReactNode;
  selectedPromo: string | null;
  discount: number;
}) {
  const isAutumnPromo = selectedPromo === 'AUTUMN50';
  const pedicureDiscount = isAutumnPromo ? 0 : discount;
  const repairDiscount = discount;
  const discountAmount = Math.round(1750 * pedicureDiscount + 900 * repairDiscount);
  const total = 2750 - discountAmount;
  const format = (value: number) => `${value.toLocaleString('ru-RU')} ₽`;

  return (
    <div className="bg-[#f3f3f3] content-stretch flex gap-[8px] items-start overflow-clip pb-[64px] pt-[16px] px-[16px] relative rounded-[20px] shadow-[0px_12px_48px_0px_rgba(0,0,0,0.24)] size-full" data-node-id="2054:40778" data-name=":::">
      <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-col h-full items-start p-[16px] relative rounded-[16px] shrink-0 w-[340px]" data-node-id="2054:40779" data-name="🔴 Wrapper">
        <div className="content-stretch flex flex-col items-start overflow-visible relative shrink-0 w-full" data-node-id="I2054:40779;22357:39120" data-name="Slot">
          <div className="content-stretch flex gap-[8px] items-start pb-[16px] relative shrink-0 w-full" data-node-id="I2054:40779;22357:39120;2054:40783" data-name="Header">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I2054:40779;22357:39120;2054:40783;6028:71888" data-name="Label">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[217px]" data-node-id="I2054:40779;22357:39120;2054:40783;6028:71889" data-name="Head">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] min-w-px not-italic relative text-[#262626] text-[16px]" data-node-id="I2054:40779;22357:39120;2054:40783;6028:71890">
                  <p className="leading-[22px]">Общий счет</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[rgba(0,0,0,0.02)] content-stretch flex flex-col gap-[4px] items-start px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="I2054:40779;22357:39120;2054:41334" data-name="Resources">
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-node-id="I2054:40779;22357:39120;2054:41335" data-name="⚙️ Label">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic overflow-hidden relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] text-ellipsis whitespace-nowrap" data-node-id="I2054:40779;22357:39120;2054:41335;317:9205">
                Промокод
              </p>
            </div>
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="I2054:40779;22357:39120;2054:41336" data-name="Layout">
              {promoField}
            </div>
          </div>
          <div className="h-[16px] relative shrink-0 w-full" data-node-id="I2054:40779;22357:39120;2054:41378" data-name="Space Block" />
          <div className="content-stretch flex items-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2054:40779;22357:39120;2054:40784" data-name="🟡 Basic Card">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-[40px] min-w-px relative" data-node-id="I2054:40779;22357:39120;2054:40784;13135:18208" data-name=".⚙️ Text">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2054:40779;22357:39120;2054:40784;13135:18208;12110:8331" data-name="Title">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[#262626] text-[14px]" data-node-id="I2054:40779;22357:39120;2054:40784;13135:18208;12110:8332">
                  Педикюр без покрытия
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I2054:40779;22357:39120;2054:40784;13135:18209" data-name=".⚙️ Right">
              <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-node-id="I2054:40779;22357:39120;2054:40784;13135:18209;12177:10748" data-name="Container">
                <div className="content-stretch flex flex-col gap-[2px] items-end justify-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2054:40779;22357:39120;2054:40784;13135:18209;13320:10146" data-name=".⚙️ Text">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I2054:40779;22357:39120;2054:40784;13135:18209;13320:10146;12110:8331" data-name="Title">
                    <PaymentServicePrice amount={1750} discount={pedicureDiscount} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2054:40779;22357:39120;2054:40785" data-name="🟡 Basic Card">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-[40px] min-w-px relative" data-node-id="I2054:40779;22357:39120;2054:40785;13135:18208" data-name=".⚙️ Text">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2054:40779;22357:39120;2054:40785;13135:18208;12110:8331" data-name="Title">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[#262626] text-[14px]" data-node-id="I2054:40779;22357:39120;2054:40785;13135:18208;12110:8332">
                  Ремонт ногтя
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I2054:40779;22357:39120;2054:40785;13135:18209" data-name=".⚙️ Right">
              <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-node-id="I2054:40779;22357:39120;2054:40785;13135:18209;12177:10748" data-name="Container">
                <div className="content-stretch flex flex-col gap-[2px] items-end justify-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2054:40779;22357:39120;2054:40785;13135:18209;13320:10146" data-name=".⚙️ Text">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I2054:40779;22357:39120;2054:40785;13135:18209;13320:10146;12110:8331" data-name="Title">
                    <PaymentServicePrice amount={900} discount={repairDiscount} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2054:40779;22357:39120;2054:40786" data-name="🟡 Basic Card">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-[40px] min-w-px relative" data-node-id="I2054:40779;22357:39120;2054:40786;13135:18208" data-name=".⚙️ Text">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2054:40779;22357:39120;2054:40786;13135:18208;12110:8331" data-name="Title">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[20px] min-w-px not-italic relative text-[#262626] text-[14px]" data-node-id="I2054:40779;22357:39120;2054:40786;13135:18208;12110:8332">
                  Сервисный сбор
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I2054:40779;22357:39120;2054:40786;13135:18209" data-name=".⚙️ Right">
              <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-node-id="I2054:40779;22357:39120;2054:40786;13135:18209;12177:10748" data-name="Container">
                <div className="content-stretch flex flex-col gap-[2px] items-end justify-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2054:40779;22357:39120;2054:40786;13135:18209;13320:10146" data-name=".⚙️ Text">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I2054:40779;22357:39120;2054:40786;13135:18209;13320:10146;12110:8331" data-name="Title">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[#262626] text-[14px] whitespace-nowrap" data-node-id="I2054:40779;22357:39120;2054:40786;13135:18209;13320:10146;12110:8332">
                      50 ₽
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[8px] relative shrink-0 w-full" data-node-id="I2054:40779;22357:39120;2054:40787" data-name="Space Block" />
          <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="I2054:40779;22357:39120;2054:40788">
            <div className="-scale-y-100 flex-none w-full">
              <div className="h-px relative w-full" data-name="Separation">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSeparation} />
              </div>
            </div>
          </div>
          <div className="h-[8px] relative shrink-0 w-full" data-node-id="I2054:40779;22357:39120;2054:40789" data-name="Space Block" />
          {selectedPromo && (
            <div className="content-stretch flex min-h-[40px] items-center relative shrink-0 w-full">
              <p className="flex-[1_0_0] font-['Inter:Regular'] text-[14px] leading-[20px] text-[#262626]">
                Скидка по промокоду {selectedPromo}
              </p>
              <p className="shrink-0 font-['Inter:Regular'] text-[14px] leading-[20px] text-[#18a957]">
                −{format(discountAmount)}
              </p>
            </div>
          )}
          <div className="content-stretch flex items-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2054:40779;22357:39120;2054:40790" data-name="🟡 Basic Card">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I2054:40779;22357:39120;2054:40790;13135:18208" data-name="⚙️ Text">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2054:40779;22357:39120;2054:40790;13135:18208;12110:4647" data-name="Title">
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[#262626] text-[16px]" data-node-id="I2054:40779;22357:39120;2054:40790;13135:18208;12110:4648">
                  К оплате
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I2054:40779;22357:39120;2054:40790;13135:18209" data-name=".⚙️ Right">
              <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-node-id="I2054:40779;22357:39120;2054:40790;13135:18209;12177:10748" data-name="Container">
                <div className="content-stretch flex flex-col gap-[2px] items-end justify-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2054:40779;22357:39120;2054:40790;13135:18209;13320:10146" data-name=".⚙️ Text">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I2054:40779;22357:39120;2054:40790;13135:18209;13320:10146;12110:4647" data-name="Title">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[#262626] text-[16px] whitespace-nowrap" data-node-id="I2054:40779;22357:39120;2054:40790;13135:18209;13320:10146;12110:4648">
                      {format(total)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[16px] relative shrink-0 w-full" data-node-id="I2054:40779;22357:39120;2054:40791" data-name="Space Block" />
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I2054:40779;22357:39120;2054:40792" data-name="Checkbox">
            <div className="relative shrink-0 size-[20px]" data-node-id="I2054:40779;22357:39120;2054:40792;1176:10421" data-name=".Checkbox_on_S">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-node-id="I2054:40779;22357:39120;2054:40792;1176:10421;1173:6487" data-name="Checkbox">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCheckbox} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-node-id="I2054:40779;22357:39120;2054:40792;1169:1499" data-name="Content">
              <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-node-id="I2054:40779;22357:39120;2054:40792;1169:1500" data-name="Header">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[14px] whitespace-nowrap" data-node-id="I2054:40779;22357:39120;2054:40792;1169:1501">
                  <p className="leading-[20px]">Печатать фискальный чек</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[16px] relative shrink-0 w-full" data-node-id="I2054:40779;22357:39120;2054:40794" data-name="Space Block" />
          <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="I2054:40779;22357:39120;2054:40795" data-name="Button">
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] whitespace-nowrap" data-node-id="I2054:40779;22357:39120;2054:40795;8884:30282">
              Распечатать детали продажи в PDF
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip p-[16px] relative rounded-[16px]" data-node-id="2054:40780" data-name="🔴 Wrapper">
        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526" data-name="Slot">
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40797" data-name="Header">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I2054:40780;22568:9526;2054:40798" data-name="Label">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[252px]" data-node-id="I2054:40780;22568:9526;2054:40799" data-name="Head">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] min-w-px not-italic relative text-[#262626] text-[20px]" data-node-id="I2054:40780;22568:9526;2054:40800">
                  <p className="leading-[26px]">Оплата визита</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2054:40780;22568:9526;2054:40805">
              <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex cursor-pointer gap-[4px] items-center justify-center px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="I2054:40780;22568:9526;2054:40806" data-name="Button" onClick={onClose}>
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] whitespace-nowrap" data-node-id="I2054:40780;22568:9526;2054:40806;8884:30282">
                  Закрыть
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2054:40780;22568:9526;2054:40807" data-name="Tabs">
            <div className="content-stretch flex gap-[4px] items-center justify-center p-[12px] relative shrink-0" data-node-id="I2054:40780;22568:9526;2054:40808" data-name="Tab">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[14px] whitespace-nowrap" data-node-id="I2054:40780;22568:9526;2054:40808;8656:6680">
                <p className="leading-[20px]">Быстрая оплата</p>
              </div>
              <div className="absolute bottom-0 h-[2px] left-0 right-0" data-node-id="I2054:40780;22568:9526;2054:40808;8656:6682" data-name="Line">
                <div className="absolute inset-[-100%_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[4px] items-center justify-center p-[12px] relative shrink-0" data-node-id="I2054:40780;22568:9526;2054:40809" data-name="Tab">
              <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(38,38,38,0.6)] whitespace-nowrap" data-node-id="I2054:40780;22568:9526;2054:40809;8667:12668">
                <p className="leading-[20px]">Детализированная оплата</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40815" data-name="Card layout">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40816" data-name="Row">
              <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[118px] items-start min-w-px p-[12px] relative rounded-[12px]" data-node-id="I2054:40780;22568:9526;2054:40817" data-name="🔴 Wrapper">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip relative w-full" data-node-id="I2054:40780;22568:9526;2054:40817;22357:39088" data-name="Slot">
                  <div className="content-stretch flex items-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40817;22357:39088;2054:40835" data-name="🟡 Basic Card">
                    <div className="content-stretch flex items-start pr-[12px] py-[4px] relative shrink-0" data-node-id="I2054:40780;22568:9526;2054:40817;22357:39088;2054:40835;13135:18207" data-name=".⚙️ Left">
                      <div className="bg-[rgba(41,194,53,0.22)] content-stretch flex items-center p-[8px] relative rounded-[100px] shrink-0" data-node-id="I2054:40780;22568:9526;2054:40817;22357:39088;2054:40835;13135:18207;12081:32168" data-name="ㅤ  ↪ Color icon">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I2054:40780;22568:9526;2054:40817;22357:39088;2054:40835;13135:18207;12081:32168;3783:9579" data-name="Magic">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPaymentCard} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I2054:40780;22568:9526;2054:40817;22357:39088;2054:40835;13135:18208" data-name="⚙️ Text">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40817;22357:39088;2054:40835;13135:18208;12110:4647" data-name="Title">
                        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[#262626] text-[16px]" data-node-id="I2054:40780;22568:9526;2054:40817;22357:39088;2054:40835;13135:18208;12110:4648">
                          Банковская карта
                        </p>
                      </div>
                    </div>
                    <Right className="h-[24px] relative shrink-0 w-[0.5px]" />
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip relative w-[181px]" data-node-id="I2054:40780;22568:9526;2054:40817;22357:39088;2054:40836" data-name="Slot">
                    <div className="content-stretch flex gap-[4px] items-center justify-center py-[8px] relative rounded-[8px] shrink-0" data-node-id="I2054:40780;22568:9526;2054:40817;22357:39088;2054:40837" data-name="Button Dropdown">
                      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] whitespace-nowrap" data-node-id="I2054:40780;22568:9526;2054:40817;22357:39088;2054:40837;4124:7461">
                        Расчетный счет
                      </p>
                      <div className="relative shrink-0 size-[16px]" data-node-id="I2054:40780;22568:9526;2054:40817;22357:39088;2054:40837;4124:7462" data-name="Right Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRightIcon} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[118px] items-start min-w-px p-[12px] relative rounded-[12px]" data-node-id="I2054:40780;22568:9526;2054:40818" data-name="🔴 Wrapper">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip relative w-full" data-node-id="I2054:40780;22568:9526;2054:40818;22357:39088" data-name="Slot">
                  <div className="content-stretch flex items-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40818;22357:39088;2054:40839" data-name="🟡 Basic Card">
                    <div className="content-stretch flex items-start pr-[12px] py-[4px] relative shrink-0" data-node-id="I2054:40780;22568:9526;2054:40818;22357:39088;2054:40839;13135:18207" data-name=".⚙️ Left">
                      <div className="bg-[rgba(47,83,227,0.1)] content-stretch flex items-center p-[8px] relative rounded-[100px] shrink-0" data-node-id="I2054:40780;22568:9526;2054:40818;22357:39088;2054:40839;13135:18207;12081:32168" data-name="ㅤ  ↪ Color icon">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I2054:40780;22568:9526;2054:40818;22357:39088;2054:40839;13135:18207;12081:32168;3783:9595" data-name="Magic">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWallet} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I2054:40780;22568:9526;2054:40818;22357:39088;2054:40839;13135:18208" data-name="⚙️ Text">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40818;22357:39088;2054:40839;13135:18208;12110:4647" data-name="Title">
                        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[#262626] text-[16px]" data-node-id="I2054:40780;22568:9526;2054:40818;22357:39088;2054:40839;13135:18208;12110:4648">
                          Наличные
                        </p>
                      </div>
                    </div>
                    <Right className="h-[24px] relative shrink-0 w-[0.5px]" />
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip relative w-[181px]" data-node-id="I2054:40780;22568:9526;2054:40818;22357:39088;2054:40840" data-name="Slot">
                    <div className="content-stretch flex gap-[4px] items-center justify-center py-[8px] relative rounded-[8px] shrink-0" data-node-id="I2054:40780;22568:9526;2054:40818;22357:39088;2054:40841" data-name="Button Dropdown">
                      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] whitespace-nowrap" data-node-id="I2054:40780;22568:9526;2054:40818;22357:39088;2054:40841;4124:7461">
                        Основная касса
                      </p>
                      <div className="relative shrink-0 size-[16px]" data-node-id="I2054:40780;22568:9526;2054:40818;22357:39088;2054:40841;4124:7462" data-name="Right Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRightIcon} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[118px] items-start min-w-px p-[12px] relative rounded-[12px]" data-node-id="I2054:40780;22568:9526;2054:40819" data-name="🔴 Wrapper">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip relative w-full" data-node-id="I2054:40780;22568:9526;2054:40819;22357:39088" data-name="Slot">
                  <div className="content-stretch flex items-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40819;22357:39088;2054:40843" data-name="🟡 Basic Card">
                    <div className="content-stretch flex items-start pr-[12px] py-[4px] relative shrink-0" data-node-id="I2054:40780;22568:9526;2054:40819;22357:39088;2054:40843;13135:18207" data-name=".⚙️ Left">
                      <div className="bg-[rgba(248,188,59,0.2)] content-stretch flex items-center p-[8px] relative rounded-[100px] shrink-0" data-node-id="I2054:40780;22568:9526;2054:40819;22357:39088;2054:40843;13135:18207;12081:32168" data-name="ㅤ  ↪ Color icon">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I2054:40780;22568:9526;2054:40819;22357:39088;2054:40843;13135:18207;12081:32168;3783:9587" data-name="Magic">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDiscountPromotion} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I2054:40780;22568:9526;2054:40819;22357:39088;2054:40843;13135:18208" data-name="⚙️ Text">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40819;22357:39088;2054:40843;13135:18208;12110:4647" data-name="Title">
                        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[#262626] text-[16px]" data-node-id="I2054:40780;22568:9526;2054:40819;22357:39088;2054:40843;13135:18208;12110:4648">
                          Кешбэк
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40819;22357:39088;2054:40843;13135:18208;23569:22561" data-name="Annotation">
                        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal h-full leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(38,38,38,0.6)] w-[73px]">Subtitle</p>
                      </div>
                    </div>
                    <Right className="h-[24px] relative shrink-0 w-[0.5px]" />
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pt-[8px] relative shrink-0 w-[181px]" data-node-id="I2054:40780;22568:9526;2054:40819;22357:39088;2054:40844" data-name="Slot">
                    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[2px] items-start leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(38,38,38,0.6)] whitespace-nowrap" data-node-id="I2054:40780;22568:9526;2054:40819;22357:39088;2054:40846">
                      <p className="relative shrink-0" data-node-id="I2054:40780;22568:9526;2054:40819;22357:39088;2054:40847">
                        Баланс: 5 000 ₽
                      </p>
                      <p className="relative shrink-0" data-node-id="I2054:40780;22568:9526;2054:40819;22357:39088;2054:40848">
                        Спишется: 750 ₽
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[516px]" data-node-id="I2054:40780;22568:9526;2054:40820" data-name="Row">
              <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[12px] relative rounded-[12px]" data-node-id="I2054:40780;22568:9526;2054:40821" data-name="🔴 Wrapper">
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40821;22357:39088" data-name="Slot">
                  <div className="content-stretch flex items-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40821;22357:39088;2054:40850" data-name="🟡 Basic Card">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I2054:40780;22568:9526;2054:40821;22357:39088;2054:40850;13135:18208" data-name="⚙️ Text">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40821;22357:39088;2054:40850;13135:18208;12110:4647" data-name="Title">
                        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[#262626] text-[16px]" data-node-id="I2054:40780;22568:9526;2054:40821;22357:39088;2054:40850;13135:18208;12110:4648">
                          Сертификат №582459
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40821;22357:39088;2054:40850;13135:18208;23569:22561" data-name="Annotation">
                        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal h-full leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(38,38,38,0.6)] w-[73px]">Subtitle</p>
                      </div>
                    </div>
                    <Right className="h-[24px] relative shrink-0 w-[0.5px]" />
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pt-[8px] relative shrink-0 w-[181px]" data-node-id="I2054:40780;22568:9526;2054:40821;22357:39088;2054:40851" data-name="Slot">
                    <div className="bg-[rgba(38,38,38,0.07)] content-stretch flex gap-[2px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-node-id="I2054:40780;22568:9526;2054:40821;22357:39088;2054:40852" data-name="Tag">
                      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[14px] not-italic relative shrink-0 text-[#262626] text-[11px] whitespace-nowrap" data-node-id="I2054:40780;22568:9526;2054:40821;22357:39088;2054:40852;1845:21957">
                        Многократный
                      </p>
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[2px] items-start leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(38,38,38,0.6)] whitespace-nowrap" data-node-id="I2054:40780;22568:9526;2054:40821;22357:39088;2054:40853">
                      <p className="relative shrink-0" data-node-id="I2054:40780;22568:9526;2054:40821;22357:39088;2054:40854">
                        Баланс: 5 000 ₽
                      </p>
                      <p className="relative shrink-0" data-node-id="I2054:40780;22568:9526;2054:40821;22357:39088;2054:40855">
                        Спишется: 750 ₽
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[144px] items-start min-w-px p-[12px] relative rounded-[12px]" data-node-id="I2054:40780;22568:9526;2054:40822" data-name="🔴 Wrapper">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip relative w-full" data-node-id="I2054:40780;22568:9526;2054:40822;22357:39088" data-name="Slot">
                  <div className="content-stretch flex items-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40822;22357:39088;2054:40857" data-name="🟡 Basic Card">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I2054:40780;22568:9526;2054:40822;22357:39088;2054:40857;13135:18208" data-name="⚙️ Text">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40822;22357:39088;2054:40857;13135:18208;12110:4647" data-name="Title">
                        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[#262626] text-[16px]" data-node-id="I2054:40780;22568:9526;2054:40822;22357:39088;2054:40857;13135:18208;12110:4648">
                          Акция
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40822;22357:39088;2054:40857;13135:18208;23569:22561" data-name="Annotation">
                        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal h-full leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(38,38,38,0.6)] w-[73px]">Subtitle</p>
                      </div>
                    </div>
                    <Right className="h-[24px] relative shrink-0 w-[0.5px]" />
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px overflow-clip pt-[8px] relative w-full" data-node-id="I2054:40780;22568:9526;2054:40822;22357:39088;2054:40858" data-name="Slot">
                    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[2px] items-start leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(38,38,38,0.6)] whitespace-nowrap" data-node-id="I2054:40780;22568:9526;2054:40822;22357:39088;2054:40860">
                      <p className="relative shrink-0" data-node-id="I2054:40780;22568:9526;2054:40822;22357:39088;2054:40861">
                        Накопительная скидка (продано)
                      </p>
                      <p className="relative shrink-0" data-node-id="I2054:40780;22568:9526;2054:40822;22357:39088;2054:40862">
                        1%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[251px]" data-node-id="I2054:40780;22568:9526;2054:40823" data-name="Resources">
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-node-id="I2054:40780;22568:9526;2054:40824" data-name="⚙️ Label">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[16px] not-italic overflow-hidden relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] text-ellipsis whitespace-nowrap" data-node-id="I2054:40780;22568:9526;2054:40824;317:9205">
                Номер абонемента или сертификата
              </p>
            </div>
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40825" data-name="Layout">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-node-id="I2054:40780;22568:9526;2054:40826" data-name="Text Field">
                <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex items-center overflow-clip p-[4px] relative rounded-[8px] shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40826;2784:12031" data-name="⚙️ Input Form/Small/Default/On/Off">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-w-[44px] px-[8px] py-[2px] relative" data-node-id="I2054:40780;22568:9526;2054:40826;2784:12031;6495:20993" data-name=".⚙️ Text Slot">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic overflow-hidden relative shrink-0 text-[14px] text-[rgba(38,38,38,0.26)] text-ellipsis whitespace-nowrap" data-node-id="I2054:40780;22568:9526;2054:40826;2784:12031;6495:20993;5523:18817">
                      000000
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0 w-[32px]" data-node-id="I2054:40780;22568:9526;2054:40827" data-name="Icon Button">
                <div className="relative shrink-0 size-[16px]" data-node-id="I2054:40780;22568:9526;2054:40827;8890:41793" data-name="Icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40828" data-name="Other">
            <div className="content-stretch flex gap-[8px] items-start pb-[16px] relative shrink-0 w-[404px]" data-node-id="I2054:40780;22568:9526;2054:40829" data-name="Header">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I2054:40780;22568:9526;2054:40829;6028:71888" data-name="Label">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[217px]" data-node-id="I2054:40780;22568:9526;2054:40829;6028:71889" data-name="Head">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] min-w-px not-italic relative text-[#262626] text-[16px]" data-node-id="I2054:40780;22568:9526;2054:40829;6028:71890">
                    <p className="leading-[22px]">Другие способы оплаты</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40830" data-name="Card layour">
              <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[150px] items-start min-w-px p-[12px] relative rounded-[12px]" data-node-id="I2054:40780;22568:9526;2054:40831" data-name="🔴 Wrapper">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip relative w-full" data-node-id="I2054:40780;22568:9526;2054:40831;22357:39088" data-name="Slot">
                  <div className="content-stretch flex items-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40831;22357:39088;2054:40864" data-name="🟡 Basic Card">
                    <div className="content-stretch flex items-start pr-[12px] py-[4px] relative shrink-0" data-node-id="I2054:40780;22568:9526;2054:40831;22357:39088;2054:40864;13135:18207" data-name=".⚙️ Left">
                      <div className="bg-[rgba(38,38,38,0.07)] content-stretch flex items-center p-[8px] relative rounded-[100px] shrink-0" data-node-id="I2054:40780;22568:9526;2054:40831;22357:39088;2054:40864;13135:18207;12081:32168" data-name="ㅤ  ↪ Color icon">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I2054:40780;22568:9526;2054:40831;22357:39088;2054:40864;13135:18207;12081:32168;3783:9563" data-name="Magic">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgQrCode} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I2054:40780;22568:9526;2054:40831;22357:39088;2054:40864;13135:18208" data-name="⚙️ Text">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40831;22357:39088;2054:40864;13135:18208;12110:4647" data-name="Title">
                        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[#262626] text-[16px]" data-node-id="I2054:40780;22568:9526;2054:40831;22357:39088;2054:40864;13135:18208;12110:4648">
                          Оплата по QR-коду
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40831;22357:39088;2054:40864;13135:18208;23569:22561" data-name="Annotation">
                        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal h-full leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(38,38,38,0.6)] w-[73px]">Subtitle</p>
                      </div>
                    </div>
                    <Right className="h-[24px] relative shrink-0 w-[0.5px]" />
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px overflow-clip relative w-[181px]" data-node-id="I2054:40780;22568:9526;2054:40831;22357:39088;2054:40865" data-name="Slot">
                    <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-node-id="I2054:40780;22568:9526;2054:40831;22357:39088;2054:40866" data-name="Button">
                      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] whitespace-nowrap" data-node-id="I2054:40780;22568:9526;2054:40831;22357:39088;2054:40866;8884:30282">
                        Подключить
                      </p>
                      <div className="relative shrink-0 size-[16px]" data-node-id="I2054:40780;22568:9526;2054:40831;22357:39088;2054:40866;8884:30283" data-name="Right Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRightIcon1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[150px] items-start min-w-px p-[12px] relative rounded-[12px]" data-node-id="I2054:40780;22568:9526;2054:40832" data-name="🔴 Wrapper">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip relative w-full" data-node-id="I2054:40780;22568:9526;2054:40832;22357:39088" data-name="Slot">
                  <div className="content-stretch flex items-start min-h-[40px] relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40832;22357:39088;2054:40868" data-name="🟡 Basic Card">
                    <div className="content-stretch flex items-start pr-[12px] py-[4px] relative shrink-0" data-node-id="I2054:40780;22568:9526;2054:40832;22357:39088;2054:40868;13135:18207" data-name=".⚙️ Left">
                      <div className="bg-[rgba(102,68,224,0.1)] content-stretch flex items-center p-[8px] relative rounded-[100px] shrink-0" data-node-id="I2054:40780;22568:9526;2054:40832;22357:39088;2054:40868;13135:18207;12081:32168" data-name="ㅤ  ↪ Color icon">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I2054:40780;22568:9526;2054:40832;22357:39088;2054:40868;13135:18207;12081:32168;3783:9603" data-name="Magic">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAttachLink} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I2054:40780;22568:9526;2054:40832;22357:39088;2054:40868;13135:18208" data-name="⚙️ Text">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40832;22357:39088;2054:40868;13135:18208;12110:4647" data-name="Title">
                        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[#262626] text-[16px]" data-node-id="I2054:40780;22568:9526;2054:40832;22357:39088;2054:40868;13135:18208;12110:4648">
                          Оплата по ссылке
                          <br aria-hidden />и в YPLACES
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40832;22357:39088;2054:40868;13135:18208;23569:22561" data-name="Annotation">
                        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal h-full leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(38,38,38,0.6)] w-[73px]">Subtitle</p>
                      </div>
                    </div>
                    <Right className="h-[24px] relative shrink-0 w-[0.5px]" />
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px overflow-clip relative w-[181px]" data-node-id="I2054:40780;22568:9526;2054:40832;22357:39088;2054:40869" data-name="Slot">
                    <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-node-id="I2054:40780;22568:9526;2054:40832;22357:39088;2054:40870" data-name="Button">
                      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] whitespace-nowrap" data-node-id="I2054:40780;22568:9526;2054:40832;22357:39088;2054:40870;8884:30282">
                        Подключить
                      </p>
                      <div className="relative shrink-0 size-[16px]" data-node-id="I2054:40780;22568:9526;2054:40832;22357:39088;2054:40870;8884:30283" data-name="Right Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRightIcon1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex flex-[1_0_0] flex-col h-[150px] items-start min-w-px p-[12px] relative rounded-[12px]" data-node-id="I2054:40780;22568:9526;2054:40833" data-name="🔴 Wrapper">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip relative w-full" data-node-id="I2054:40780;22568:9526;2054:40833;22357:39088" data-name="Slot">
                  <div className="content-stretch flex items-center min-h-[40px] relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40833;22357:39088;2054:40872" data-name="🟡 Basic Card">
                    <div className="content-stretch flex items-start pr-[12px] py-[4px] relative shrink-0" data-node-id="I2054:40780;22568:9526;2054:40833;22357:39088;2054:40872;13135:18207" data-name=".⚙️ Left">
                      <div className="bg-[rgba(247,44,50,0.15)] content-stretch flex items-center p-[8px] relative rounded-[100px] shrink-0" data-node-id="I2054:40780;22568:9526;2054:40833;22357:39088;2054:40872;13135:18207;12081:32168" data-name="ㅤ  ↪ Color icon">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I2054:40780;22568:9526;2054:40833;22357:39088;2054:40872;13135:18207;12081:32168;3783:9571" data-name="Magic">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAnalyticsPieChart} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px relative" data-node-id="I2054:40780;22568:9526;2054:40833;22357:39088;2054:40872;13135:18208" data-name="⚙️ Text">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40833;22357:39088;2054:40872;13135:18208;12110:4647" data-name="Title">
                        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[22px] min-w-px not-italic relative text-[#262626] text-[16px]" data-node-id="I2054:40780;22568:9526;2054:40833;22357:39088;2054:40872;13135:18208;12110:4648">
                          Оплата по частям
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2054:40780;22568:9526;2054:40833;22357:39088;2054:40872;13135:18208;23569:22561" data-name="Annotation">
                        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal h-full leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(38,38,38,0.6)] w-[73px]">Subtitle</p>
                      </div>
                    </div>
                    <Right className="h-[24px] relative shrink-0 w-[0.5px]" />
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px overflow-clip relative w-[181px]" data-node-id="I2054:40780;22568:9526;2054:40833;22357:39088;2054:40873" data-name="Slot">
                    <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-node-id="I2054:40780;22568:9526;2054:40833;22357:39088;2054:40874" data-name="Button">
                      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] whitespace-nowrap" data-node-id="I2054:40780;22568:9526;2054:40833;22357:39088;2054:40874;8884:30282">
                        Подключить
                      </p>
                      <div className="relative shrink-0 size-[16px]" data-node-id="I2054:40780;22568:9526;2054:40833;22357:39088;2054:40874;8884:30283" data-name="Right Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRightIcon1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#f3f3f3] bottom-0 content-stretch flex flex-col items-start justify-center left-0 p-[16px] right-0" data-node-id="2054:40781" data-name="Action Footer">
        <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-node-id="I2054:40781;13483:10549" data-name="Content">
          <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-[670px]" data-node-id="I2054:40781;13483:12314" data-name="Button Align">
            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-w-px relative" data-node-id="I2054:40781;13483:12314;13483:12737" data-name="Main">
              <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="I2054:40781;13483:12314;13483:11640" data-name="Button">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] whitespace-nowrap" data-node-id="I2054:40781;13483:12314;13483:11640;8884:30282">
                  Удалить запись
                </p>
              </div>
              <div className="bg-[#ffcb00] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-node-id="I2054:40781;13483:12314;13483:11641" data-name="Button">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] whitespace-nowrap" data-node-id="I2054:40781;13483:12314;13483:11641;756:20969">
                  Сохранить запись
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
