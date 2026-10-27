import { useState } from 'react';
import AppointmentModal, { type AppointmentModalData } from './AppointmentModal';
import GroupAppointmentModal from './GroupAppointmentModal';

const assetPathPrefix = `${import.meta.env.BASE_URL}assets`.replace(/\/+/g, '/');
const imgUserPhoto19 = `${assetPathPrefix}/45707.png`;
const imgBell = `${assetPathPrefix}/c811f.svg`;
const imgIcon = `${assetPathPrefix}/a67b4.svg`;
const imgSeparation = `${assetPathPrefix}/00327.svg`;
const imgIcon1 = `${assetPathPrefix}/2c7cd.svg`;
const imgClock = `${assetPathPrefix}/dec84.svg`;
const imgIcon2 = `${assetPathPrefix}/4fea2.svg`;
const imgIcon3 = `${assetPathPrefix}/ea308.svg`;
const imgIcon4 = `${assetPathPrefix}/897ab.svg`;
const imgMoneyCoins = `${assetPathPrefix}/79a04.svg`;
const imgInfo = `${assetPathPrefix}/7e9a8.svg`;
const imgChat = `${assetPathPrefix}/cda6b.svg`;
const imgArrowLeft = `${assetPathPrefix}/c3249.svg`;
const imgIcon5 = `${assetPathPrefix}/b87f2.svg`;
const imgIcon6 = `${assetPathPrefix}/cb3f4.svg`;
const imgShopGooglePlayTypeLogo = `${assetPathPrefix}/92c88.svg`;
const imgShopHuaweiShopTypeLogo = `${assetPathPrefix}/a9425.svg`;
const imgShopHuaweiShopTypeText = `${assetPathPrefix}/b59bf.svg`;
const imgAppShopLogo = `${assetPathPrefix}/e2c39.svg`;
const imgAppShopLogo1 = `${assetPathPrefix}/2b67f.svg`;
const imgAppShopLogo2 = `${assetPathPrefix}/bdf56.svg`;
const imgAppShopLogo3 = `${assetPathPrefix}/59d16.svg`;
const imgAppShopLogo4 = `${assetPathPrefix}/86655.svg`;
const imgAppShopLogo5 = `${assetPathPrefix}/7d797.svg`;
const imgBigChevronLeft = `${assetPathPrefix}/cc47b.svg`;
const imgBigChevronRight = `${assetPathPrefix}/717ca.svg`;
const imgSeparation1 = `${assetPathPrefix}/6c0e3.svg`;
const imgAvatarUser = `${assetPathPrefix}/a6639.svg`;
const imgIcon7 = `${assetPathPrefix}/c5e25.svg`;
const imgClients = `${assetPathPrefix}/48d82.svg`;
const imgLayout = `${assetPathPrefix}/ee233.svg`;
const imgLineChart = `${assetPathPrefix}/48489.svg`;
const imgRuble = `${assetPathPrefix}/cdc26.svg`;
const imgSalaryMoneyPay = `${assetPathPrefix}/95d13.svg`;
const imgBoxes = `${assetPathPrefix}/7575f.svg`;
const imgBrowserInternetWebSite = `${assetPathPrefix}/50e0f.svg`;
const imgLoyaltyLoyaltyCard = `${assetPathPrefix}/e4e04.svg`;
const imgSettings = `${assetPathPrefix}/3e70e.svg`;
const imgCards = `${assetPathPrefix}/b7695.svg`;
const imgHelp = `${assetPathPrefix}/5fafe.svg`;
const imgLogo = `${assetPathPrefix}/4925b.svg`;
const imgSidebar = `${assetPathPrefix}/fe93e.svg`;
const imgChevronLeft = `${assetPathPrefix}/23de9.svg`;
const imgChevronRight = `${assetPathPrefix}/e3a47.svg`;
const imgRightIcon = `${assetPathPrefix}/7b2d7.svg`;
const imgSettings1 = `${assetPathPrefix}/dee5a.svg`;
const imgFilterSortSettingLine = `${assetPathPrefix}/b8131.svg`;
const imgUserAdd = `${assetPathPrefix}/29b59.svg`;
const imgPlus = `${assetPathPrefix}/f2efc.svg`;
const imgChevronDown = `${assetPathPrefix}/ab30f.svg`;
const imgIcon8 = `${assetPathPrefix}/84a1f.svg`;
const imgLines = `${assetPathPrefix}/0c31d.svg`;
const imgIcons8PxStatusCircleMinus = `${assetPathPrefix}/14c1e.svg`;
const imgIcons8PxStatusWaiting = `${assetPathPrefix}/f00e8.svg`;
const imgLine1 = `${assetPathPrefix}/1e808.svg`;

type ToolbarProps = {
  className?: string;
  apps?: boolean;
  jorneyApps?: boolean;
  superuserButton?: boolean;
};

function Toolbar({ className, apps = true, jorneyApps = true, superuserButton = false }: ToolbarProps) {
  return (
    <div className={className || "bg-[#f5f5f5] content-stretch flex flex-col h-[768px] items-center justify-between pb-[16px] pt-[12px] px-[8px] relative w-[48px]"} data-node-id="2003:2789" data-name="<Toolbar>">
      <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0" data-node-id="2003:2790" data-name="Up">
        <div className="border-[0.5px] border-[rgba(0,0,0,0.04)] border-solid content-stretch flex items-center overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-node-id="2003:2791" data-name="🟡 Avatar">
          <div className="relative shrink-0 size-[32px]" data-node-id="I2003:2791;2152:8150" data-name="User Photo 19">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUserPhoto19} />
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-node-id="2003:2792" data-name="🟡 Icon Button">
          <div className="relative shrink-0 size-[20px]" data-node-id="I2003:2792;755:26533" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBell} />
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-node-id="2003:2793" data-name="🟡 Icon Button">
          <div className="relative shrink-0 size-[20px]" data-node-id="I2003:2793;755:26533" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
          </div>
        </div>
        {jorneyApps && (
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="2003:2794" data-name="Page slot">
            <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="2003:2795">
              <div className="-scale-y-100 flex-none w-full">
                <div className="h-px relative w-full" data-name="🛠️ Separation">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSeparation} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-node-id="2003:2796" data-name="🟡 Icon Button">
              <div className="relative shrink-0 size-[20px]" data-node-id="I2003:2796;755:26533" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-node-id="2003:2797" data-name="🟡 Icon Button">
              <div className="relative shrink-0 size-[20px]" data-node-id="I2003:2797;755:26533" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} />
              </div>
            </div>
          </div>
        )}
        {apps && (
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="2003:2798" data-name="Integrations slot">
            <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="2003:2799">
              <div className="-scale-y-100 flex-none w-full">
                <div className="h-px relative w-full" data-name="🛠️ Separation">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSeparation} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-node-id="2003:2800" data-name="🟡 Icon Button">
              <div className="relative shrink-0 size-[20px]" data-node-id="I2003:2800;755:26533" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-node-id="2003:2801" data-name="🟡 Icon Button">
              <div className="relative shrink-0 size-[20px]" data-node-id="I2003:2801;755:26533" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-node-id="2003:2802" data-name="🟡 Icon Button">
              <div className="relative shrink-0 size-[20px]" data-node-id="I2003:2802;755:26533" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon4} />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0" data-node-id="2003:2803" data-name="Bottom">
        <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-node-id="2003:2804" data-name="🟡 Icon Button">
          <div className="relative shrink-0 size-[20px]" data-node-id="I2003:2804;755:26533" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMoneyCoins} />
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-node-id="2003:2805" data-name="🟡 Icon Button">
          <div className="relative shrink-0 size-[20px]" data-node-id="I2003:2805;755:26533" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgInfo} />
          </div>
        </div>
        <div className="bg-[#ffcb00] content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-node-id="2003:2806" data-name="🟡 Icon Button">
          <div className="relative shrink-0 size-[20px]" data-node-id="I2003:2806;755:26511" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChat} />
          </div>
        </div>
        {superuserButton && (
          <div className="bg-[#262626] content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-node-id="2003:2807" data-name="🟡 Icon Button">
            <div className="relative shrink-0 size-[20px]" data-node-id="I2003:2807;755:26511" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowLeft} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TimeSlot({ className }: { className?: string }) {
  return (
    <div className={className || '[word-break:break-word] font-["Inter:Regular"] font-normal h-[90px] leading-[0] not-italic relative text-right w-[60px] whitespace-nowrap'} data-node-id="2076:103496" data-name="Time Slot">
      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[5px]" data-node-id="2076:103497">
        <p className="leading-[16px]">00</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[32px] text-[#2b3134] text-[16px] top-[6px]" data-node-id="2076:103498">
        <p className="leading-[24px]">09</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[35px]" data-node-id="2076:103499">
        <p className="leading-[16px]">20</p>
      </div>
      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[65px]" data-node-id="2076:103500">
        <p className="leading-[16px]">40</p>
      </div>
    </div>
  );
}

type CardWrapperProps = {
  className?: string;
  property1?: "Default" | "hov";
};

function CardWrapper({ className, property1 = "hov" }: CardWrapperProps) {
  const isDefault = property1 === "Default";
  return (
    <div className={className || `content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] ${isDefault ? "bg-white w-[191px]" : "bg-[rgba(38,38,38,0.03)] w-[191.301px]"}`} id={isDefault ? "node-2076_103460" : "node-2076_103457"}>
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" id={isDefault ? "node-2076_103461" : "node-2076_103458"} data-name="Slot">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" id={isDefault ? "node-2076_103462" : "node-2076_103459"} data-name="Empl Big">
          <div className="content-stretch flex items-center overflow-clip relative rounded-[4px] shrink-0 size-[24px]" id={isDefault ? "node-I2076_103462-2222_68670" : "node-I2076_103459-2222_68670"} data-name="Avatar"><img alt="Елена Рыбкина" className="size-full object-cover" src={`${assetPathPrefix}/masters/elena.jpg`} /></div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Medium'] font-medium gap-[2px] items-start leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" id={isDefault ? "node-I2076_103462-2222_68671" : "node-I2076_103459-2222_68671"} data-name="Text">
            <div className="flex flex-col h-[12.729px] justify-center overflow-hidden relative shrink-0 text-[#2b3134] text-[12px] text-ellipsis w-full" id={isDefault ? "node-I2076_103462-2222_68672" : "node-I2076_103459-2222_68672"}>
              <p className="leading-[16px] overflow-hidden text-ellipsis">Елена Рыбкина</p>
            </div>
            <div className="flex flex-col h-[12.729px] justify-center overflow-hidden relative shrink-0 text-[#71757f] text-[11px] text-ellipsis w-full" id={isDefault ? "node-I2076_103462-2222_68673" : "node-I2076_103459-2222_68673"}>
              <p className="leading-[14px] overflow-hidden text-ellipsis">Парикмахер</p>
            </div>
          </div>
          {property1 === "hov" && (
            <div className="absolute content-stretch flex gap-[4px] items-start right-0 top-0" data-node-id="I2076:103459;2222:68905">
              <div className="relative shrink-0 size-[16px]" data-node-id="I2076:103459;2222:71277" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon5} />
              </div>
              <div className="relative shrink-0 size-[16px]" data-node-id="I2076:103459;2222:71249" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type CardWrapper1Props = {
  className?: string;
  property1?: "Default" | "hov";
};

function CardWrapper1({ className, property1 = "hov" }: CardWrapper1Props) {
  const isDefault = property1 === "Default";
  return (
    <div className={className || `content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] ${isDefault ? "bg-white w-[191px]" : "bg-[rgba(38,38,38,0.03)] w-[191.301px]"}`} id={isDefault ? "node-2076_103451" : "node-2076_103448"}>
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" id={isDefault ? "node-2076_103452" : "node-2076_103449"} data-name="Slot">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" id={isDefault ? "node-2076_103453" : "node-2076_103450"} data-name="Empl Big">
          <div className="content-stretch flex items-center overflow-clip relative rounded-[4px] shrink-0 size-[24px]" id={isDefault ? "node-I2076_103453-2222_68670" : "node-I2076_103450-2222_68670"} data-name="Avatar"><img alt="Никита Иванов" className="size-full object-cover" src={`${assetPathPrefix}/masters/nikita.jpg`} /></div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Medium'] font-medium gap-[2px] items-start leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" id={isDefault ? "node-I2076_103453-2222_68671" : "node-I2076_103450-2222_68671"} data-name="Text">
            <div className="flex flex-col h-[12.729px] justify-center overflow-hidden relative shrink-0 text-[#2b3134] text-[12px] text-ellipsis w-full" id={isDefault ? "node-I2076_103453-2222_68672" : "node-I2076_103450-2222_68672"}>
              <p className="leading-[16px] overflow-hidden text-ellipsis">Никита Иванов</p>
            </div>
            <div className="flex flex-col h-[12.729px] justify-center overflow-hidden relative shrink-0 text-[#71757f] text-[11px] text-ellipsis w-full" id={isDefault ? "node-I2076_103453-2222_68673" : "node-I2076_103450-2222_68673"}>
              <p className="leading-[14px] overflow-hidden text-ellipsis">Парикмахер</p>
            </div>
          </div>
          {property1 === "hov" && (
            <div className="absolute content-stretch flex gap-[4px] items-start right-0 top-0" data-node-id="I2076:103450;2222:68905">
              <div className="relative shrink-0 size-[16px]" data-node-id="I2076:103450;2222:71277" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon5} />
              </div>
              <div className="relative shrink-0 size-[16px]" data-node-id="I2076:103450;2222:71249" data-name="Icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon6} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type AppShopLogoProps = {
  className?: string;
  shop?: "Google Play" | "Huawei Shop";
  type?: "Text" | "Logo";
};

function AppShopLogo({ className, shop = "Google Play", type = "Logo" }: AppShopLogoProps) {
  const isHuaweiShopAndLogo = shop === "Huawei Shop" && type === "Logo";
  const isHuaweiShopAndText = shop === "Huawei Shop" && type === "Text";
  return (
    <div className={className || `relative ${isHuaweiShopAndText ? "h-[15px] w-[80px]" : "size-[24px]"}`} id={isHuaweiShopAndText ? "node-2003_1102" : isHuaweiShopAndLogo ? "node-2003_1100" : "node-2003_1096"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={isHuaweiShopAndText ? imgShopHuaweiShopTypeText : isHuaweiShopAndLogo ? imgShopHuaweiShopTypeLogo : imgShopGooglePlayTypeLogo} />
    </div>
  );
}

type ButtonStoreProps = {
  className?: string;
  shop?: "App Store" | "Google Play" | "Huiawei";
  state?: "Default";
};

function ButtonStore({ className, shop = "App Store", state = "Default" }: ButtonStoreProps) {
  const isDefaultAndGooglePlay = state === "Default" && shop === "Google Play";
  const isDefaultAndHuiawei = state === "Default" && shop === "Huiawei";
  return (
    <div className={className || "content-stretch flex gap-[4px] items-center overflow-clip py-[8px] relative"} id={isDefaultAndHuiawei ? "node-2003_1885" : isDefaultAndGooglePlay ? "node-2003_1880" : "node-2003_1875"}>
      <div className="relative shrink-0 size-[24px]" id={isDefaultAndHuiawei ? "node-2003_1886" : isDefaultAndGooglePlay ? "node-2003_1881" : "node-2003_1876"} data-name="App shop logo">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={isDefaultAndHuiawei ? imgAppShopLogo4 : isDefaultAndGooglePlay ? imgAppShopLogo2 : imgAppShopLogo} />
      </div>
      <div className={`content-stretch flex flex-col gap-[3px] items-start relative shrink-0 ${state === "Default" && ["Google Play", "Huiawei"].includes(shop) ? "" : "w-[67px]"}`} id={isDefaultAndHuiawei ? "node-2003_1887" : isDefaultAndGooglePlay ? "node-2003_1882" : "node-2003_1877"} data-name="Text">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal h-[7px] justify-center leading-[0] not-italic relative shrink-0 text-[9px] text-[rgba(0,0,0,0.6)] w-[53px]" id={isDefaultAndHuiawei ? "node-2003_1888" : isDefaultAndGooglePlay ? "node-2003_1883" : "node-2003_1878"}>
          <p className="leading-[normal]">Загрузите в</p>
        </div>
        <div className={`h-[15px] relative shrink-0 ${isDefaultAndHuiawei ? "w-[80px]" : "w-full"}`} id={isDefaultAndHuiawei ? "node-2003_1889" : isDefaultAndGooglePlay ? "node-2003_1884" : "node-2003_1879"} data-name="App shop logo">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={isDefaultAndHuiawei ? imgAppShopLogo5 : isDefaultAndGooglePlay ? imgAppShopLogo3 : imgAppShopLogo1} />
        </div>
      </div>
    </div>
  );
}

type DayCellProps = {
  className?: string;
  current?: boolean;
  marked?: boolean;
  rangeRadius?: "None";
  size?: "Small";
  state?: "Default";
  type?: "Active" | "Adjacent";
};

function DayCell({ className, current = false, marked = false, rangeRadius = "None", size = "Small", state = "Default", type = "Active" }: DayCellProps) {
  const isAdjacentAndDefaultAndNoneAndSmall = type === "Adjacent" && state === "Default" && rangeRadius === "None" && size === "Small";
  return (
    <div className={className || "content-stretch flex flex-col gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px]"} id={isAdjacentAndDefaultAndNoneAndSmall ? "node-2003_2478" : "node-2003_2452"}>
      {marked && <div className="absolute border-2 border-[rgba(38,38,38,0.05)] border-solid inset-[0_1px] rounded-[8px]" data-node-id="2003:2453" data-name="Marked" />}
      <div className={`[word-break:break-word] flex flex-col font-["Inter:Medium"] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center w-[20px] ${isAdjacentAndDefaultAndNoneAndSmall ? "text-[rgba(38,38,38,0.6)]" : "text-[#262626]"}`} id={isAdjacentAndDefaultAndNoneAndSmall ? "node-2003_2480" : "node-2003_2454"}>
        <p className="leading-[16px]">31</p>
      </div>
      {current && <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#ffcb00] h-[2px] left-1/2 rounded-[2px] top-[calc(50%+9px)] w-[16px]" data-node-id="2003:2455" data-name="Line" />}
    </div>
  );
}

type WeekDayProps = {
  className?: string;
  size?: "Small";
};

function WeekDay({ className, size = "Small" }: WeekDayProps) {
  return (
    <div className={className || "content-stretch flex flex-col gap-[8px] items-center px-[12px] py-[8px] relative rounded-[8px]"} data-node-id="2003:2424">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] text-center whitespace-nowrap" data-node-id="2003:2425">
        <p className="leading-[16px]">пн</p>
      </div>
    </div>
  );
}

type WeekDaysProps = {
  className?: string;
  size?: "Small";
};

function WeekDays({ className, size = "Small" }: WeekDaysProps) {
  return (
    <div className={className || "content-stretch flex items-center relative w-[266px]"} data-node-id="2003:2431">
      <WeekDay className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="2003:2433" data-name=".Week Day">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] text-center whitespace-nowrap" data-node-id="I2003:2433;2217:7170">
          <p className="leading-[16px]">вт</p>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="2003:2434" data-name=".Week Day">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] text-center whitespace-nowrap" data-node-id="I2003:2434;2217:7170">
          <p className="leading-[16px]">ср</p>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="2003:2435" data-name=".Week Day">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] text-center whitespace-nowrap" data-node-id="I2003:2435;2217:7170">
          <p className="leading-[16px]">чт</p>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="2003:2436" data-name=".Week Day">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] text-center whitespace-nowrap" data-node-id="I2003:2436;2217:7170">
          <p className="leading-[16px]">пт</p>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="2003:2437" data-name=".Week Day">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] text-center whitespace-nowrap" data-node-id="I2003:2437;2217:7170">
          <p className="leading-[16px]">сб</p>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="2003:2438" data-name=".Week Day">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] text-center whitespace-nowrap" data-node-id="I2003:2438;2217:7170">
          <p className="leading-[16px]">вс</p>
        </div>
      </div>
    </div>
  );
}

export default function PageLayout() {
  const [appointment, setAppointment] = useState<AppointmentModalData | null>(null);
  const [groupAppointmentOpen, setGroupAppointmentOpen] = useState(false);

  const openAppointment = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const card = target.closest<HTMLElement>('[data-name="Event Card Template"]');
    if (!card) return;
    if (card.dataset.groupEvent === 'true') {
      setGroupAppointmentOpen(true);
      return;
    }

    const content = card.querySelector<HTMLElement>('[data-name="Content"]');
    const timeText = card.querySelector<HTMLElement>('[data-name="Header"] p')?.innerText.trim() ?? '';
    const texts = Array.from(content?.querySelectorAll('p') ?? []).map((node) => (node as HTMLElement).innerText.trim());
    const clientParts = (texts[1] ?? '').split('\n').filter(Boolean);
    const masterCards = Array.from(document.querySelectorAll<HTMLElement>('[data-name="masters-line(1-5)"] [data-name="Card Wrapper"]'));
    const cardCenter = card.getBoundingClientRect().left + card.getBoundingClientRect().width / 2;
    const masterCard = masterCards.reduce<HTMLElement | null>((nearest, item) => {
      if (!nearest) return item;
      const itemCenter = item.getBoundingClientRect().left + item.getBoundingClientRect().width / 2;
      const nearestCenter = nearest.getBoundingClientRect().left + nearest.getBoundingClientRect().width / 2;
      return Math.abs(itemCenter - cardCenter) < Math.abs(nearestCenter - cardCenter) ? item : nearest;
    }, null);
    const masterTexts = Array.from(masterCard?.querySelectorAll('p') ?? []).map((node) => (node as HTMLElement).innerText.trim());
    const masterPhoto = masterCard?.querySelector<HTMLImageElement>('img')?.src ?? `${assetPathPrefix}/masters/anna.jpg`;
    const [start = '', end = ''] = timeText.split(/\s*[−–-]\s*/);
    const duration = (() => {
      const [sh, sm] = start.split(':').map(Number);
      const [eh, em] = end.split(':').map(Number);
      const minutes = (eh * 60 + em) - (sh * 60 + sm);
      if (!Number.isFinite(minutes) || minutes <= 0) return '1 час';
      if (minutes === 60) return '1 час';
      if (minutes === 90) return '1 час 30 мин';
      return `${minutes} мин`;
    })();

    setAppointment({
      master: masterTexts[0] || 'Мастер',
      masterRole: masterTexts[1] || 'Специалист',
      masterPhoto,
      client: clientParts[0] || 'Клиент',
      phone: clientParts[1] || '',
      date: '21 сентября',
      time: `${start} – ${end} · ${duration}`,
      service: texts[0] || 'Услуга',
    });
  };

  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col isolate items-start relative size-full" data-node-id="2075:101503" data-name="❖ Page layout" onClick={openAppointment}>
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px relative w-full z-[1]" data-node-id="I2075:101503;2752:57880" data-name="Layout">
        <div className="content-stretch flex flex-col h-[1589px] items-start overflow-clip relative shrink-0 w-[240px]" data-node-id="I2075:101503;2752:57881" data-name="<Navigation>">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px pt-[56px] relative w-[240px]" data-node-id="I2075:101503;2752:57881;538:7406" data-name="Main container">
            <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0 w-full" data-node-id="I2075:101503;2752:57881;538:7412" data-name="Calendar Layout">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-[200px] relative" data-node-id="I2075:101503;2752:57881;538:7413" data-name="🟢 Calendar">
                <div className="content-stretch flex items-center justify-between min-w-[200px] relative shrink-0 w-full" data-node-id="I2075:101503;2752:57881;538:7413;2217:10827" data-name=".Header">
                  <div className="[word-break:break-word] content-stretch flex font-['Inter:Medium'] font-medium gap-[4px] items-center justify-center leading-[18px] not-italic px-[16px] relative shrink-0 text-[#262626] text-[13px] whitespace-nowrap" data-node-id="I2075:101503;2752:57881;538:7413;2217:10827;2217:10787" data-name="Selection Layout">
                    <p className="relative shrink-0" data-node-id="I2075:101503;2752:57881;538:7413;2217:10827;2217:10823">
                      Сентябрь
                    </p>
                    <p className="relative shrink-0" data-node-id="I2075:101503;2752:57881;538:7413;2217:10827;2217:10825">
                      2024
                    </p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2075:101503;2752:57881;538:7413;2217:10827;13587:20418" data-name="Buttons">
                    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-node-id="I2075:101503;2752:57881;538:7413;2217:10827;2217:10786" data-name="🟡 Icon Button">
                      <div className="relative shrink-0 size-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:10827;2217:10786;755:26533" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBigChevronLeft} />
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-node-id="I2075:101503;2752:57881;538:7413;2217:10827;2217:10790" data-name="🟡 Icon Button">
                      <div className="relative shrink-0 size-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:10827;2217:10790;755:26533" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBigChevronRight} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="I2075:101503;2752:57881;538:7413;2217:13373" data-name="Weeks n Days">
                  <WeekDays className="content-stretch flex items-center relative shrink-0 w-full" />
                  <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-node-id="I2075:101503;2752:57881;538:7413;2217:6617" data-name="Month">
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="I2075:101503;2752:57881;538:7413;2217:6547" data-name="Week - 1">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6541" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6541;2210:16773">
                          <p className="leading-[16px]">27</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6544" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6544;2210:16773">
                          <p className="leading-[16px]">28</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6548" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6548;2210:16773">
                          <p className="leading-[16px]">29</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6552" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6552;2210:16773">
                          <p className="leading-[16px]">30</p>
                        </div>
                      </div>
                      <DayCell className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" type="Adjacent" />
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6560" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6560;2210:16749">
                          <p className="leading-[16px]">1</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6564" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6564;2210:16749">
                          <p className="leading-[16px]">2</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="I2075:101503;2752:57881;538:7413;2217:6595" data-name="Week - 2">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6596" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6596;2210:16749">
                          <p className="leading-[16px]">3</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6597" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6597;2210:16749">
                          <p className="leading-[16px]">4</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6598" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6598;2210:16749">
                          <p className="leading-[16px]">5</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6599" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6599;2210:16749">
                          <p className="leading-[16px]">6</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6600" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6600;2210:16749">
                          <p className="leading-[16px]">7</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6601" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6601;2210:16749">
                          <p className="leading-[16px]">8</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6602" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6602;2210:16749">
                          <p className="leading-[16px]">9</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="I2075:101503;2752:57881;538:7413;2217:6720" data-name="Week - 3">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6721" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6721;2210:16749">
                          <p className="leading-[16px]">10</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6722" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6722;2210:16749">
                          <p className="leading-[16px]">11</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6723" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6723;2210:16749">
                          <p className="leading-[16px]">12</p>
                        </div>
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#ffcb00] h-[2px] left-1/2 rounded-[2px] top-[calc(50%+9px)] w-[16px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6723;2210:16819" data-name="Line" />
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6724" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6724;2210:16749">
                          <p className="leading-[16px]">13</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6725" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6725;2210:16749">
                          <p className="leading-[16px]">14</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6726" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6726;2210:16749">
                          <p className="leading-[16px]">15</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6727" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6727;2210:16749">
                          <p className="leading-[16px]">16</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="I2075:101503;2752:57881;538:7413;2217:6743" data-name="Week - 4">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6744" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6744;2210:16749">
                          <p className="leading-[16px]">17</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6745" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6745;2210:16749">
                          <p className="leading-[16px]">18</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6746" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6746;2210:16749">
                          <p className="leading-[16px]">19</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6747" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6747;2210:16749">
                          <p className="leading-[16px]">20</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6748" data-name=".Day Cell">
                        <div className="absolute bg-[#ffcb00] inset-[0_1px] rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6748;19865:20780" data-name="Selected" />
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6748;2210:16776">
                          <p className="leading-[16px]">21</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6749" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6749;2210:16749">
                          <p className="leading-[16px]">22</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6750" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6750;2210:16749">
                          <p className="leading-[16px]">23</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="I2075:101503;2752:57881;538:7413;2217:6766" data-name="Week - 5">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6767" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6767;2210:16749">
                          <p className="leading-[16px]">24</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6768" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6768;2210:16749">
                          <p className="leading-[16px]">25</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6769" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6769;2210:16749">
                          <p className="leading-[16px]">26</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6770" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6770;2210:16749">
                          <p className="leading-[16px]">27</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6771" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6771;2210:16749">
                          <p className="leading-[16px]">28</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6772" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6772;2210:16749">
                          <p className="leading-[16px]">29</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6773" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6773;2210:16749">
                          <p className="leading-[16px]">30</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="I2075:101503;2752:57881;538:7413;2217:6789" data-name="Week - 6">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6790" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#262626] text-[12px] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6790;2210:16749">
                          <p className="leading-[16px]">31</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6791" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6791;2210:16773">
                          <p className="leading-[16px]">1</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6792" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6792;2210:16773">
                          <p className="leading-[16px]">2</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6793" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6793;2210:16773">
                          <p className="leading-[16px]">3</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6794" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6794;2210:16773">
                          <p className="leading-[16px]">4</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6795" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6795;2210:16773">
                          <p className="leading-[16px]">5</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[32px] items-center justify-center min-w-px px-[12px] py-[8px] relative rounded-[8px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6796" data-name=".Day Cell">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(38,38,38,0.6)] text-center w-[20px]" data-node-id="I2075:101503;2752:57881;538:7413;2217:6796;2210:16773">
                          <p className="leading-[16px]">6</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="I2075:101503;2752:57881;1077:32311">
              <div className="-scale-y-100 flex-none w-full">
                <div className="h-px relative w-full" data-name="🛠️ Separation">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSeparation1} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[2px] items-start px-[8px] py-[12px] relative shrink-0 w-full" data-node-id="I2075:101503;2752:57881;538:7416" data-name="Menu 1">
              <div className="content-stretch flex items-center min-h-[36px] px-[8px] relative rounded-[12px] shrink-0 w-full" data-node-id="I2075:101503;2752:57881;1075:35162" data-name="🟢 Side Menu Item">
                <div className="content-stretch flex items-start pr-[8px] py-[4px] relative shrink-0" data-node-id="I2075:101503;2752:57881;1075:35162;20623:7149" data-name="↪ Left">
                  <div className="relative shrink-0 size-[20px]" data-node-id="I2075:101503;2752:57881;1075:35162;20623:7149;20623:7227" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAvatarUser} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px py-[8px] relative" data-node-id="I2075:101503;2752:57881;1075:35162;20623:7150" data-name="↪ Text">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[18px] max-h-[36px] not-italic overflow-hidden relative shrink-0 text-[#262626] text-[13px] text-ellipsis w-full" data-node-id="I2075:101503;2752:57881;1075:35162;20623:7150;20623:7216">
                    Сотрудники
                  </p>
                </div>
                <div className="content-stretch flex items-center pl-[8px] relative shrink-0" data-node-id="I2075:101503;2752:57881;1075:35162;20623:7151" data-name="↪ Right">
                  <div className="flex flex-row items-center self-stretch" data-node-id="I2075:101503;2752:57881;1075:35162;20623:7151;20623:7231">
                    <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="Icon Container">
                      <div className="relative shrink-0 size-[12px]" data-node-id="I2075:101503;2752:57881;1075:35162;20623:7151;20623:7232" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center min-h-[36px] px-[8px] relative rounded-[12px] shrink-0 w-full" data-node-id="I2075:101503;2752:57881;1077:23909" data-name="🟢 Side Menu Item">
                <div className="content-stretch flex items-start pr-[8px] py-[4px] relative shrink-0" data-node-id="I2075:101503;2752:57881;1077:23909;20623:7149" data-name="↪ Left">
                  <div className="relative shrink-0 size-[20px]" data-node-id="I2075:101503;2752:57881;1077:23909;20623:7149;20623:7227" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClients} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px py-[8px] relative" data-node-id="I2075:101503;2752:57881;1077:23909;20623:7150" data-name="↪ Text">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[18px] max-h-[36px] not-italic overflow-hidden relative shrink-0 text-[#262626] text-[13px] text-ellipsis w-full" data-node-id="I2075:101503;2752:57881;1077:23909;20623:7150;20623:7216">
                    Клиенты
                  </p>
                </div>
                <div className="content-stretch flex items-center pl-[8px] relative shrink-0" data-node-id="I2075:101503;2752:57881;1077:23909;20623:7151" data-name="↪ Right">
                  <div className="flex flex-row items-center self-stretch" data-node-id="I2075:101503;2752:57881;1077:23909;20623:7151;20623:7231">
                    <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="Icon Container">
                      <div className="relative shrink-0 size-[12px]" data-node-id="I2075:101503;2752:57881;1077:23909;20623:7151;20623:7232" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center min-h-[36px] px-[8px] relative rounded-[12px] shrink-0 w-full" data-node-id="I2075:101503;2752:57881;1077:23931" data-name="🟢 Side Menu Item">
                <div className="content-stretch flex items-start pr-[8px] py-[4px] relative shrink-0" data-node-id="I2075:101503;2752:57881;1077:23931;20623:7149" data-name="↪ Left">
                  <div className="relative shrink-0 size-[20px]" data-node-id="I2075:101503;2752:57881;1077:23931;20623:7149;20623:7227" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayout} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px py-[8px] relative" data-node-id="I2075:101503;2752:57881;1077:23931;20623:7150" data-name="↪ Text">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[18px] max-h-[36px] not-italic overflow-hidden relative shrink-0 text-[#262626] text-[13px] text-ellipsis w-full" data-node-id="I2075:101503;2752:57881;1077:23931;20623:7150;20623:7216">
                    Обзор
                  </p>
                </div>
                <div className="content-stretch flex items-center pl-[8px] relative shrink-0" data-node-id="I2075:101503;2752:57881;1077:23931;20623:7151" data-name="↪ Right">
                  <div className="flex flex-row items-center self-stretch" data-node-id="I2075:101503;2752:57881;1077:23931;20623:7151;20623:7231">
                    <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="Icon Container">
                      <div className="relative shrink-0 size-[12px]" data-node-id="I2075:101503;2752:57881;1077:23931;20623:7151;20623:7232" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center min-h-[36px] px-[8px] relative rounded-[12px] shrink-0 w-full" data-node-id="I2075:101503;2752:57881;1077:23953" data-name="🟢 Side Menu Item">
                <div className="content-stretch flex items-start pr-[8px] py-[4px] relative shrink-0" data-node-id="I2075:101503;2752:57881;1077:23953;20623:7149" data-name="↪ Left">
                  <div className="relative shrink-0 size-[20px]" data-node-id="I2075:101503;2752:57881;1077:23953;20623:7149;20623:7227" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLineChart} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px py-[8px] relative" data-node-id="I2075:101503;2752:57881;1077:23953;20623:7150" data-name="↪ Text">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[18px] max-h-[36px] not-italic overflow-hidden relative shrink-0 text-[#262626] text-[13px] text-ellipsis w-full" data-node-id="I2075:101503;2752:57881;1077:23953;20623:7150;20623:7216">
                    Аналитика
                  </p>
                </div>
                <div className="content-stretch flex items-center pl-[8px] relative shrink-0" data-node-id="I2075:101503;2752:57881;1077:23953;20623:7151" data-name="↪ Right">
                  <div className="flex flex-row items-center self-stretch" data-node-id="I2075:101503;2752:57881;1077:23953;20623:7151;20623:7231">
                    <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="Icon Container">
                      <div className="relative shrink-0 size-[12px]" data-node-id="I2075:101503;2752:57881;1077:23953;20623:7151;20623:7232" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center min-h-[36px] px-[8px] relative rounded-[12px] shrink-0 w-full" data-node-id="I2075:101503;2752:57881;1077:23975" data-name="🟢 Side Menu Item">
                <div className="content-stretch flex items-start pr-[8px] py-[4px] relative shrink-0" data-node-id="I2075:101503;2752:57881;1077:23975;20623:7149" data-name="↪ Left">
                  <div className="relative shrink-0 size-[20px]" data-node-id="I2075:101503;2752:57881;1077:23975;20623:7149;20623:7227" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRuble} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px py-[8px] relative" data-node-id="I2075:101503;2752:57881;1077:23975;20623:7150" data-name="↪ Text">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[18px] max-h-[36px] not-italic overflow-hidden relative shrink-0 text-[#262626] text-[13px] text-ellipsis w-full" data-node-id="I2075:101503;2752:57881;1077:23975;20623:7150;20623:7216">
                    Финансы
                  </p>
                </div>
                <div className="content-stretch flex items-center pl-[8px] relative shrink-0" data-node-id="I2075:101503;2752:57881;1077:23975;20623:7151" data-name="↪ Right">
                  <div className="flex flex-row items-center self-stretch" data-node-id="I2075:101503;2752:57881;1077:23975;20623:7151;20623:7231">
                    <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="Icon Container">
                      <div className="relative shrink-0 size-[12px]" data-node-id="I2075:101503;2752:57881;1077:23975;20623:7151;20623:7232" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center min-h-[36px] px-[8px] relative rounded-[12px] shrink-0 w-full" data-node-id="I2075:101503;2752:57881;1077:23997" data-name="🟢 Side Menu Item">
                <div className="content-stretch flex items-start pr-[8px] py-[4px] relative shrink-0" data-node-id="I2075:101503;2752:57881;1077:23997;20623:7149" data-name="↪ Left">
                  <div className="relative shrink-0 size-[20px]" data-node-id="I2075:101503;2752:57881;1077:23997;20623:7149;20623:7227" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSalaryMoneyPay} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px py-[8px] relative" data-node-id="I2075:101503;2752:57881;1077:23997;20623:7150" data-name="↪ Text">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[18px] max-h-[36px] not-italic overflow-hidden relative shrink-0 text-[#262626] text-[13px] text-ellipsis w-full" data-node-id="I2075:101503;2752:57881;1077:23997;20623:7150;20623:7216">
                    Расчет зарплат
                  </p>
                </div>
                <div className="content-stretch flex items-center pl-[8px] relative shrink-0" data-node-id="I2075:101503;2752:57881;1077:23997;20623:7151" data-name="↪ Right">
                  <div className="flex flex-row items-center self-stretch" data-node-id="I2075:101503;2752:57881;1077:23997;20623:7151;20623:7231">
                    <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="Icon Container">
                      <div className="relative shrink-0 size-[12px]" data-node-id="I2075:101503;2752:57881;1077:23997;20623:7151;20623:7232" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center min-h-[36px] px-[8px] relative rounded-[12px] shrink-0 w-full" data-node-id="I2075:101503;2752:57881;1077:24019" data-name="🟢 Side Menu Item">
                <div className="content-stretch flex items-start pr-[8px] py-[4px] relative shrink-0" data-node-id="I2075:101503;2752:57881;1077:24019;20623:7149" data-name="↪ Left">
                  <div className="relative shrink-0 size-[20px]" data-node-id="I2075:101503;2752:57881;1077:24019;20623:7149;20623:7227" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBoxes} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px py-[8px] relative" data-node-id="I2075:101503;2752:57881;1077:24019;20623:7150" data-name="↪ Text">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[18px] max-h-[36px] not-italic overflow-hidden relative shrink-0 text-[#262626] text-[13px] text-ellipsis w-full" data-node-id="I2075:101503;2752:57881;1077:24019;20623:7150;20623:7216">
                    Склад
                  </p>
                </div>
                <div className="content-stretch flex items-center pl-[8px] relative shrink-0" data-node-id="I2075:101503;2752:57881;1077:24019;20623:7151" data-name="↪ Right">
                  <div className="flex flex-row items-center self-stretch" data-node-id="I2075:101503;2752:57881;1077:24019;20623:7151;20623:7231">
                    <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="Icon Container">
                      <div className="relative shrink-0 size-[12px]" data-node-id="I2075:101503;2752:57881;1077:24019;20623:7151;20623:7232" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center min-h-[36px] px-[8px] relative rounded-[12px] shrink-0 w-full" data-node-id="I2075:101503;2752:57881;1077:24041" data-name="🟢 Side Menu Item">
                <div className="content-stretch flex items-start pr-[8px] py-[4px] relative shrink-0" data-node-id="I2075:101503;2752:57881;1077:24041;20623:7149" data-name="↪ Left">
                  <div className="relative shrink-0 size-[20px]" data-node-id="I2075:101503;2752:57881;1077:24041;20623:7149;20623:7227" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBrowserInternetWebSite} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px py-[8px] relative" data-node-id="I2075:101503;2752:57881;1077:24041;20623:7150" data-name="↪ Text">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[18px] max-h-[36px] not-italic overflow-hidden relative shrink-0 text-[#262626] text-[13px] text-ellipsis w-full" data-node-id="I2075:101503;2752:57881;1077:24041;20623:7150;20623:7216">
                    Онлайн-запись
                  </p>
                </div>
              </div>
              <div className="content-stretch flex items-center min-h-[36px] px-[8px] relative rounded-[12px] shrink-0 w-full" data-node-id="I2075:101503;2752:57881;1077:24063" data-name="🟢 Side Menu Item">
                <div className="content-stretch flex items-start pr-[8px] py-[4px] relative shrink-0" data-node-id="I2075:101503;2752:57881;1077:24063;20623:7149" data-name="↪ Left">
                  <div className="relative shrink-0 size-[20px]" data-node-id="I2075:101503;2752:57881;1077:24063;20623:7149;20623:7227" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLoyaltyLoyaltyCard} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px py-[8px] relative" data-node-id="I2075:101503;2752:57881;1077:24063;20623:7150" data-name="↪ Text">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[18px] max-h-[36px] not-italic overflow-hidden relative shrink-0 text-[#262626] text-[13px] text-ellipsis w-full" data-node-id="I2075:101503;2752:57881;1077:24063;20623:7150;20623:7216">
                    Лояльность
                  </p>
                </div>
              </div>
              <div className="content-stretch flex items-center min-h-[36px] px-[8px] relative rounded-[12px] shrink-0 w-full" data-node-id="I2075:101503;2752:57881;1077:24085" data-name="🟢 Side Menu Item">
                <div className="content-stretch flex items-start pr-[8px] py-[4px] relative shrink-0" data-node-id="I2075:101503;2752:57881;1077:24085;20623:7149" data-name="↪ Left">
                  <div className="relative shrink-0 size-[20px]" data-node-id="I2075:101503;2752:57881;1077:24085;20623:7149;20623:7227" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRuble} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px py-[8px] relative" data-node-id="I2075:101503;2752:57881;1077:24085;20623:7150" data-name="↪ Text">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[18px] max-h-[36px] not-italic overflow-hidden relative shrink-0 text-[#262626] text-[13px] text-ellipsis w-full" data-node-id="I2075:101503;2752:57881;1077:24085;20623:7150;20623:7216">
                    Интеграции
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="I2075:101503;2752:57881;1077:32332">
              <div className="-scale-y-100 flex-none w-full">
                <div className="h-px relative w-full" data-name="🛠️ Separation">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSeparation1} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[2px] items-start px-[8px] py-[12px] relative shrink-0 w-full" data-node-id="I2075:101503;2752:57881;538:7429" data-name="Menu 2">
              <div className="content-stretch flex items-center min-h-[36px] px-[8px] relative rounded-[12px] shrink-0 w-full" data-node-id="I2075:101503;2752:57881;1077:29695" data-name="🟢 Side Menu Item">
                <div className="content-stretch flex items-start pr-[8px] py-[4px] relative shrink-0" data-node-id="I2075:101503;2752:57881;1077:29695;20623:7149" data-name="↪ Left">
                  <div className="relative shrink-0 size-[20px]" data-node-id="I2075:101503;2752:57881;1077:29695;20623:7149;20623:7227" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSettings} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px py-[8px] relative" data-node-id="I2075:101503;2752:57881;1077:29695;20623:7150" data-name="↪ Text">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[18px] max-h-[36px] not-italic overflow-hidden relative shrink-0 text-[#262626] text-[13px] text-ellipsis w-full" data-node-id="I2075:101503;2752:57881;1077:29695;20623:7150;20623:7216">
                    Настройки
                  </p>
                </div>
              </div>
              <div className="content-stretch flex items-center min-h-[36px] px-[8px] relative rounded-[12px] shrink-0 w-full" data-node-id="I2075:101503;2752:57881;1077:29786" data-name="🟢 Side Menu Item">
                <div className="content-stretch flex items-start pr-[8px] py-[4px] relative shrink-0" data-node-id="I2075:101503;2752:57881;1077:29786;20623:7149" data-name="↪ Left">
                  <div className="relative shrink-0 size-[20px]" data-node-id="I2075:101503;2752:57881;1077:29786;20623:7149;20623:7227" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCards} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px py-[8px] relative" data-node-id="I2075:101503;2752:57881;1077:29786;20623:7150" data-name="↪ Text">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[18px] max-h-[36px] not-italic overflow-hidden relative shrink-0 text-[#262626] text-[13px] text-ellipsis w-full" data-node-id="I2075:101503;2752:57881;1077:29786;20623:7150;20623:7216">
                    Лицензия
                  </p>
                </div>
              </div>
              <div className="content-stretch flex items-center min-h-[36px] px-[8px] relative rounded-[12px] shrink-0 w-full" data-node-id="I2075:101503;2752:57881;1077:29847" data-name="🟢 Side Menu Item">
                <div className="content-stretch flex items-start pr-[8px] py-[4px] relative shrink-0" data-node-id="I2075:101503;2752:57881;1077:29847;20623:7149" data-name="↪ Left">
                  <div className="relative shrink-0 size-[20px]" data-node-id="I2075:101503;2752:57881;1077:29847;20623:7149;20623:7227" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRuble} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px py-[8px] relative" data-node-id="I2075:101503;2752:57881;1077:29847;20623:7150" data-name="↪ Text">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[18px] max-h-[36px] not-italic overflow-hidden relative shrink-0 text-[#262626] text-[13px] text-ellipsis w-full" data-node-id="I2075:101503;2752:57881;1077:29847;20623:7150;20623:7216">
                    Личный кабинет
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center relative shrink-0 w-full" data-node-id="I2075:101503;2752:57881;1077:32352">
              <div className="-scale-y-100 flex-none w-full">
                <div className="h-px relative w-full" data-name="🛠️ Separation">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSeparation1} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[2px] items-start pb-[16px] pt-[12px] px-[8px] relative shrink-0 w-full" data-node-id="I2075:101503;2752:57881;538:7436" data-name="Menu 3">
              <div className="content-stretch flex items-center min-h-[36px] px-[8px] relative rounded-[12px] shrink-0 w-full" data-node-id="I2075:101503;2752:57881;1077:30168" data-name="🟢 Side Menu Item">
                <div className="content-stretch flex items-start pr-[8px] py-[4px] relative shrink-0" data-node-id="I2075:101503;2752:57881;1077:30168;20623:7149" data-name="↪ Left">
                  <div className="relative shrink-0 size-[20px]" data-node-id="I2075:101503;2752:57881;1077:30168;20623:7149;20623:7227" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHelp} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px py-[8px] relative" data-node-id="I2075:101503;2752:57881;1077:30168;20623:7150" data-name="↪ Text">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[18px] max-h-[36px] not-italic overflow-hidden relative shrink-0 text-[#262626] text-[13px] text-ellipsis w-full" data-node-id="I2075:101503;2752:57881;1077:30168;20623:7150;20623:7216">
                    Центр помощи
                  </p>
                </div>
                <div className="content-stretch flex items-center pl-[8px] relative shrink-0" data-node-id="I2075:101503;2752:57881;1077:30168;20623:7151" data-name="↪ Right">
                  <div className="flex flex-row items-center self-stretch" data-node-id="I2075:101503;2752:57881;1077:30168;20623:7151;20623:7231">
                    <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="Icon Container">
                      <div className="relative shrink-0 size-[12px]" data-node-id="I2075:101503;2752:57881;1077:30168;20623:7151;20623:7232" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon7} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pb-[12px] pl-[16px] pr-[12px] pt-[16px] relative shrink-0 w-full" data-node-id="I2075:101503;2752:57881;538:7448" data-name="Store Buttons">
              <ButtonStore className="content-stretch flex gap-[4px] items-center overflow-clip py-[8px] relative shrink-0 w-full" />
              <ButtonStore className="content-stretch flex gap-[4px] items-center overflow-clip py-[8px] relative shrink-0 w-full" shop="Google Play" />
              <ButtonStore className="content-stretch flex gap-[4px] items-center overflow-clip py-[8px] relative shrink-0 w-full" shop="Huiawei" />
            </div>
          </div>
          <div className="absolute bottom-0 h-[1589px] left-0 pointer-events-none top-0" data-node-id="I2075:101503;2752:57881;1077:30821">
            <div className="content-stretch flex flex-col h-[56px] items-start justify-center pointer-events-auto px-[8px] py-[2px] sticky top-0 w-[240px]" data-name="Branch / Network">
              <div className="content-stretch flex h-[52px] items-center min-h-[36px] px-[8px] relative rounded-[12px] shrink-0 w-full" data-node-id="I2075:101503;2752:57881;1077:34122" data-name="🟢 Side Menu Item">
                <div className="content-stretch flex items-start pr-[10px] py-[4px] relative shrink-0" data-node-id="I2075:101503;2752:57881;1077:34122;20623:7149" data-name="↪ Left">
                  <div className="relative shrink-0 size-[20px]" data-node-id="I2075:101503;2752:57881;1077:34122;20623:7149;20623:7223" data-name="Logo">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogo} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px py-[8px] relative" data-node-id="I2075:101503;2752:57881;1077:34122;20623:7150" data-name="↪ Text">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[18px] max-h-[36px] not-italic overflow-hidden relative shrink-0 text-[#262626] text-[13px] text-ellipsis w-full" data-node-id="I2075:101503;2752:57881;1077:34122;20623:7150;20623:7216">{`Enjoy Luxury Spa & Beauty Studio`}</p>
                </div>
                <div className="content-stretch flex items-center pl-[8px] relative shrink-0" data-node-id="I2075:101503;2752:57881;1077:34122;20623:7151" data-name="↪ Right">
                  <div className="h-[32px] relative shrink-0 w-[20px]" data-node-id="I2075:101503;2752:57881;1077:34122;20623:7151;20623:7234" data-name="Button Layout">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-end left-[calc(50%+2px)] p-[6px] rounded-[8px] top-1/2" data-node-id="I2075:101503;2752:57881;1077:34122;20623:7151;20623:7235" data-name="🟡 Icon Button">
                      <div className="relative shrink-0 size-[20px]" data-node-id="I2075:101503;2752:57881;1077:34122;20623:7151;20623:7235;755:26533" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebar} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px pb-[8px] sticky top-0" data-node-id="I2075:101503;2752:57882" data-name="Page">
          <div className="content-stretch flex h-[56px] items-center justify-between relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-node-id="I2075:101503;2752:57883" data-name="<Top Head>">
            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="I2075:101503;2752:57883;2752:5892" data-name="Left Layout">
              <div className="content-stretch flex gap-[16px] items-center pr-[8px] relative shrink-0" data-node-id="I2075:101503;2752:57883;2752:5894" data-name="Date">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I2075:101503;2752:57883;2752:5895" data-name="controls">
                  <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-node-id="I2075:101503;2752:57883;2752:5896" data-name="🟡  Button">
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] whitespace-nowrap" data-node-id="I2075:101503;2752:57883;2752:5896;8884:30282">
                      Сегодня
                    </p>
                  </div>
                  <div className="content-stretch flex h-[32px] items-center overflow-clip relative shrink-0" data-node-id="I2075:101503;2752:57883;2752:5898" data-name="🟢 Button Group">
                    <div className="bg-white border-[rgba(38,38,38,0.15)] border-b border-l border-solid border-t content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0" data-node-id="I2075:101503;2752:57883;2752:5898;8902:10188" data-name=".⚙️ ButtonGroupItem">
                      <div className="relative shrink-0 size-[16px]" data-node-id="I2075:101503;2752:57883;2752:5898;8902:10188;2503:6170" data-name="Left Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronLeft} />
                      </div>
                    </div>
                    <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0" data-node-id="I2075:101503;2752:57883;2752:5898;8902:10189" data-name=".⚙️ ButtonGroupItem">
                      <div className="relative shrink-0 size-[16px]" data-node-id="I2075:101503;2752:57883;2752:5898;8902:10189;2503:6196" data-name="Right Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronRight} />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[18px] not-italic relative shrink-0 text-[#262626] text-[14px] whitespace-nowrap" data-node-id="I2075:101503;2752:57883;2752:5899">
                  21 сентября, пятница
                </p>
              </div>
              <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-node-id="I2075:101503;2752:57883;2752:5900" data-name="🟢 Button Dropdown">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] whitespace-nowrap" data-node-id="I2075:101503;2752:57883;2752:5900;8902:29437">
                  Все сотрудники
                </p>
                <div className="relative shrink-0 size-[16px]" data-node-id="I2075:101503;2752:57883;2752:5900;8902:29438" data-name="Right Icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRightIcon} />
                </div>
              </div>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I2075:101503;2752:57883;2752:6760" data-name="Extra controls">
                <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-node-id="I2075:101503;2752:57883;2752:6707" data-name="🟡 Icon Button">
                  <div className="relative shrink-0 size-[20px]" data-node-id="I2075:101503;2752:57883;2752:6707;755:26533" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSettings1} />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-node-id="I2075:101503;2752:57883;2752:6716" data-name="🟡 Icon Button">
                  <div className="relative shrink-0 size-[20px]" data-node-id="I2075:101503;2752:57883;2752:6716;755:26533" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFilterSortSettingLine} />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0" data-node-id="I2075:101503;2752:57883;2752:6732" data-name="🟡 Icon Button">
                  <div className="relative shrink-0 size-[20px]" data-node-id="I2075:101503;2752:57883;2752:6732;755:26533" data-name="Icon">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUserAdd} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex h-[32px] items-center overflow-clip relative shrink-0" data-node-id="I2075:101503;2752:57883;2752:5906" data-name="🟢 Button Group">
              <div className="bg-white border-[rgba(38,38,38,0.15)] border-b border-l border-solid border-t content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0" data-node-id="I2075:101503;2752:57883;2752:5906;8902:10188" data-name=".⚙️ ButtonGroupItem">
                <div className="relative shrink-0 size-[16px]" data-node-id="I2075:101503;2752:57883;2752:5906;8902:10188;2503:6170" data-name="Left Icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlus} />
                </div>
              </div>
              <div className="bg-white border border-[rgba(38,38,38,0.15)] border-solid content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0" data-node-id="I2075:101503;2752:57883;2752:5906;8902:10189" data-name=".⚙️ ButtonGroupItem">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic relative shrink-0 text-[#262626] text-[12px] whitespace-nowrap" data-node-id="I2075:101503;2752:57883;2752:5906;8902:10189;2503:6195">
                  91 610 ₽
                </p>
                <div className="relative shrink-0 size-[16px]" data-node-id="I2075:101503;2752:57883;2752:5906;8902:10189;2503:6196" data-name="Right Icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-[rgba(0,0,0,0.16)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-center min-h-px relative rounded-[12px] w-full" data-node-id="I2075:101503;3390:128727" data-name=".Grid (Early Access)">
            <div className="content-stretch flex flex-[1_0_0] items-start max-w-[9999px] min-h-px relative w-full" data-node-id="I2075:101503;3390:128727;3444:204107" data-name="Content">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px py-[8px] relative" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104948">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949" data-name="masters-line(1-5)">
                  <div className="content-stretch flex h-[32px] items-center px-[12px] relative shrink-0 w-[56px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38855" />
                  <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[8px] relative rounded-[8px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38857" data-name="Card Wrapper">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38857;2001:55201" data-name="Slot">
                      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38857;2001:55202" data-name="Empl Big">
                        <div className="content-stretch flex items-center overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38857;2001:55202;2222:68670" data-name="Avatar" ><img alt="Анна Петрова" className="size-full object-cover" src={`${assetPathPrefix}/masters/anna.jpg`} /></div>
                        <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Medium'] font-medium gap-[2px] items-start leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38857;2001:55202;2222:68671" data-name="Text">
                          <div className="flex flex-col h-[12.729px] justify-center overflow-hidden relative shrink-0 text-[#2b3134] text-[12px] text-ellipsis w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38857;2001:55202;2222:68672">
                            <p className="leading-[16px] overflow-hidden text-ellipsis">Анна Петрова</p>
                          </div>
                          <div className="flex flex-col h-[12.729px] justify-center overflow-hidden relative shrink-0 text-[#71757f] text-[11px] text-ellipsis w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38857;2001:55202;2222:68673">
                            <p className="leading-[14px] overflow-hidden text-ellipsis">Парикмахер</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardWrapper1 className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[8px] relative rounded-[8px]" property1="Default" />
                  <CardWrapper className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[8px] relative rounded-[8px]" property1="Default" />
                  <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[8px] relative rounded-[8px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38860" data-name="Card Wrapper">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38860;2001:55201" data-name="Slot">
                      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38860;2001:55202" data-name="Empl Big">
                        <div className="content-stretch flex items-center overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38860;2001:55202;2222:68670" data-name="Avatar" ><img alt="Игорь Семенов" className="size-full object-cover" src={`${assetPathPrefix}/masters/igor.jpg`} /></div>
                        <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Medium'] font-medium gap-[2px] items-start leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38860;2001:55202;2222:68671" data-name="Text">
                          <div className="flex flex-col h-[12.729px] justify-center overflow-hidden relative shrink-0 text-[#2b3134] text-[12px] text-ellipsis w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38860;2001:55202;2222:68672">
                            <p className="leading-[16px] overflow-hidden text-ellipsis">Игорь Семенов</p>
                          </div>
                          <div className="flex flex-col h-[12.729px] justify-center overflow-hidden relative shrink-0 text-[#71757f] text-[11px] text-ellipsis w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38860;2001:55202;2222:68673">
                            <p className="leading-[14px] overflow-hidden text-ellipsis">Парикмахер</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[8px] relative rounded-[8px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38861" data-name="Card Wrapper">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38861;2001:55201" data-name="Slot">
                      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38861;2001:55202" data-name="Empl Big">
                        <div className="content-stretch flex items-center overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38861;2001:55202;2222:68670" data-name="Avatar" ><img alt="Софья Никитина" className="size-full object-cover" src={`${assetPathPrefix}/masters/sofia.jpg`} /></div>
                        <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Medium'] font-medium gap-[2px] items-start leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38861;2001:55202;2222:68671" data-name="Text">
                          <div className="flex flex-col h-[12.729px] justify-center overflow-hidden relative shrink-0 text-[#2b3134] text-[12px] text-ellipsis w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38861;2001:55202;2222:68672">
                            <p className="leading-[16px] overflow-hidden text-ellipsis">Софья Никитина</p>
                          </div>
                          <div className="flex flex-col h-[12.729px] justify-center overflow-hidden relative shrink-0 text-[#71757f] text-[11px] text-ellipsis w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38861;2001:55202;2222:68673">
                            <p className="leading-[14px] overflow-hidden text-ellipsis">Мастер маникюра</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[8px] relative rounded-[8px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38862" data-name="Card Wrapper">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38862;2001:55201" data-name="Slot">
                      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38862;2001:55202" data-name="Empl Big">
                        <div className="content-stretch flex items-center overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38862;2001:55202;2222:68670" data-name="Avatar" ><img alt="Арина Соколова" className="size-full object-cover" src={`${assetPathPrefix}/masters/arina.jpg`} /></div>
                        <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Medium'] font-medium gap-[2px] items-start leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38862;2001:55202;2222:68671" data-name="Text">
                          <div className="flex flex-col h-[12.729px] justify-center overflow-hidden relative shrink-0 text-[#2b3134] text-[12px] text-ellipsis w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38862;2001:55202;2222:68672">
                            <p className="leading-[16px] overflow-hidden text-ellipsis">Арина Соколова</p>
                          </div>
                          <div className="flex flex-col h-[12.729px] justify-center overflow-hidden relative shrink-0 text-[#71757f] text-[11px] text-ellipsis w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38862;2001:55202;2222:68673">
                            <p className="leading-[14px] overflow-hidden text-ellipsis">Массажист</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center px-[12px] relative shrink-0" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38864">
                    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38865" data-name="Icon Button">
                      <div className="relative shrink-0 size-[16px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104949;2014:38865;755:26533" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon8} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex h-[930px] items-end relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104950">
                  <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal h-full items-start leading-[0] not-italic relative shrink-0 text-right w-[60px] whitespace-nowrap" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951" data-name="Time">
                    <TimeSlot className="h-[90px] relative shrink-0 w-[60px]" />
                    <div className="h-[90px] relative shrink-0 w-[60px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5637" data-name="Time Slot">
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[5px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5637;42:17384">
                        <p className="leading-[16px]">00</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[32px] text-[#2b3134] text-[16px] top-[6px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5637;42:17385">
                        <p className="leading-[24px]">10</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[35px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5637;42:17386">
                        <p className="leading-[16px]">20</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[65px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5637;42:17387">
                        <p className="leading-[16px]">40</p>
                      </div>
                    </div>
                    <div className="h-[90px] relative shrink-0 w-[60px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5642" data-name="Time Slot">
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[5px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5642;42:17384">
                        <p className="leading-[16px]">00</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[32px] text-[#2b3134] text-[16px] top-[6px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5642;42:17385">
                        <p className="leading-[24px]">11</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[35px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5642;42:17386">
                        <p className="leading-[16px]">20</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[65px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5642;42:17387">
                        <p className="leading-[16px]">40</p>
                      </div>
                    </div>
                    <div className="h-[90px] relative shrink-0 w-[60px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5647" data-name="Time Slot">
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[5px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5647;42:17384">
                        <p className="leading-[16px]">00</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[32px] text-[#2b3134] text-[16px] top-[6px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5647;42:17385">
                        <p className="leading-[24px]">12</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[35px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5647;42:17386">
                        <p className="leading-[16px]">20</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[65px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5647;42:17387">
                        <p className="leading-[16px]">40</p>
                      </div>
                    </div>
                    <div className="h-[90px] relative shrink-0 w-[60px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5652" data-name="Time Slot">
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[5px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5652;42:17384">
                        <p className="leading-[16px]">00</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[32px] text-[#2b3134] text-[16px] top-[6px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5652;42:17385">
                        <p className="leading-[24px]">13</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[35px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5652;42:17386">
                        <p className="leading-[16px]">20</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[65px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5652;42:17387">
                        <p className="leading-[16px]">40</p>
                      </div>
                    </div>
                    <div className="h-[90px] relative shrink-0 w-[60px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5657" data-name="Time Slot">
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[5px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5657;42:17384">
                        <p className="leading-[16px]">00</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[32px] text-[#2b3134] text-[16px] top-[6px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5657;42:17385">
                        <p className="leading-[24px]">14</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[35px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5657;42:17386">
                        <p className="leading-[16px]">20</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[65px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5657;42:17387">
                        <p className="leading-[16px]">40</p>
                      </div>
                    </div>
                    <div className="h-[90px] relative shrink-0 w-[60px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5662" data-name="Time Slot">
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[5px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5662;42:17384">
                        <p className="leading-[16px]">00</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[32px] text-[#2b3134] text-[16px] top-[6px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5662;42:17385">
                        <p className="leading-[24px]">15</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[35px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5662;42:17386">
                        <p className="leading-[16px]">20</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[65px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5662;42:17387">
                        <p className="leading-[16px]">40</p>
                      </div>
                    </div>
                    <div className="h-[90px] relative shrink-0 w-[60px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5667" data-name="Time Slot">
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[5px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5667;42:17384">
                        <p className="leading-[16px]">00</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[32px] text-[#2b3134] text-[16px] top-[6px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5667;42:17385">
                        <p className="leading-[24px]">16</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[35px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5667;42:17386">
                        <p className="leading-[16px]">20</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[65px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5667;42:17387">
                        <p className="leading-[16px]">40</p>
                      </div>
                    </div>
                    <div className="h-[90px] relative shrink-0 w-[60px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5672" data-name="Time Slot">
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[5px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5672;42:17384">
                        <p className="leading-[16px]">00</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[32px] text-[#2b3134] text-[16px] top-[6px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5672;42:17385">
                        <p className="leading-[24px]">17</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[35px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5672;42:17386">
                        <p className="leading-[16px]">20</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[65px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5672;42:17387">
                        <p className="leading-[16px]">40</p>
                      </div>
                    </div>
                    <div className="h-[90px] relative shrink-0 w-[60px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5677" data-name="Time Slot">
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[5px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5677;42:17384">
                        <p className="leading-[16px]">00</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[32px] text-[#2b3134] text-[16px] top-[6px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5677;42:17385">
                        <p className="leading-[24px]">18</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[35px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5677;42:17386">
                        <p className="leading-[16px]">20</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[65px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5677;42:17387">
                        <p className="leading-[16px]">40</p>
                      </div>
                    </div>
                    <div className="h-[90px] relative shrink-0 w-[60px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5682" data-name="Time Slot">
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[5px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5682;42:17384">
                        <p className="leading-[16px]">00</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[32px] text-[#2b3134] text-[16px] top-[6px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104951;1:5682;42:17385">
                        <p className="leading-[24px]">19</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] gap-[5px] h-full items-start min-w-px relative" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104952">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104953" data-name="1">
                      <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104954">
                        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104955" data-name="Grid 1">
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104956" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104957" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104958" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104959" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104960" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104961" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104962" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104963" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104964" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104965" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104966" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104967" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104968" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104969" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104970" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104971" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104972" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104973" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104974" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104975" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104976" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104977" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104978" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104979" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104980" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104981" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104982" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104983" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104984" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104985" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104986" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104987" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                        </div>
                        <div className="absolute bg-[rgba(224,227,235,0.55)] inset-[0_0.47%_93.85%_0] rounded-[4px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104988" data-name="Brake">
                          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] left-[4px] not-italic text-[#2b3134] text-[9px] top-[7.5px] whitespace-nowrap" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104988;42:17392">
                            <p className="leading-[normal]">09:00 − 09:40</p>
                          </div>
                        </div>
                        <div className="absolute h-[180px] left-0 right-[-0.5px] top-[180px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104989" data-name="Event Card Template">
                          <div className="absolute bg-[#1ab394] content-stretch flex h-[16px] items-center justify-between left-0 px-[3px] py-[2px] right-0 rounded-tl-[4px] rounded-tr-[4px] top-0" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104989;2018:32536" data-name="Header">
                            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104989;2018:32537" data-name="Until">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[9px] text-white" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104989;2018:32538">
                                <p className="leading-[normal]">11:00 − 13:00</p>
                              </div>
                            </div>
                            <div className="relative shrink-0 size-[9.46px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104989;2018:32546" data-name="icons/8px/status/circleMinus">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons8PxStatusCircleMinus} />
                            </div>
                          </div>
                          <div className="[word-break:break-word] absolute bg-[#fd8787] content-stretch flex flex-col inset-[16px_0_0_0] items-start leading-[normal] not-italic overflow-clip p-[3px] rounded-bl-[4px] rounded-br-[4px] text-[#2b3134] text-[9px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104989;2018:32540" data-name="Content">
                            <p className="font-['Inter:Bold'] font-bold relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104989;2018:32543">
                              Стрижка ножницами женская
                            </p>
                            <p className="font-['Inter:Medium'] font-medium relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104989;2018:32544">
                              Марина
                              <br aria-hidden />
                              +79996479950
                            </p>
                          </div>
                        </div>
                        <div className="absolute h-[135px] left-0 right-[-0.5px] top-[360px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104990" data-name="Event Card Template">
                          <div className="absolute bg-[#1ab394] content-stretch flex h-[16px] items-center justify-between left-0 px-[3px] py-[2px] right-0 rounded-tl-[4px] rounded-tr-[4px] top-0" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104990;2016:31779" data-name="Header">
                            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104990;2016:31780" data-name="Until">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[9px] text-white" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104990;2016:31781">
                                <p className="leading-[normal]">13:00 − 14:30</p>
                              </div>
                            </div>
                            <div className="relative shrink-0 size-[9px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104990;2016:31794" data-name="icons/8px/status/waiting">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons8PxStatusWaiting} />
                            </div>
                          </div>
                          <div className="[word-break:break-word] absolute bg-[#9ce3d5] content-stretch flex flex-col inset-[16px_0_0_0] items-start leading-[normal] not-italic overflow-clip p-[3px] rounded-bl-[4px] rounded-br-[4px] text-[#2b3134] text-[9px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104990;2016:31788" data-name="Content">
                            <p className="font-['Inter:Bold'] font-bold relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104990;2016:31791">
                              Укладка средние волосы
                            </p>
                            <p className="font-['Inter:Medium'] font-medium relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104990;2016:31792">
                              Полина
                              <br aria-hidden />
                              +79146479994
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104991" data-name="10">
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104992">
                        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104993" data-name="Grid 1">
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104994" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104995" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104996" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104997" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104998" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:104999" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105000" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105001" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105002" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105003" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105004" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105005" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105006" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105007" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105008" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105009" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105010" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105011" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105012" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105013" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105014" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105015" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105016" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105017" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105018" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105019" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105020" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105021" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105022" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105023" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105024" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105025" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute h-[90px] left-[-0.57px] right-[0.07px] top-[225px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105026" data-name="Event Card Template">
                        <div className="absolute bg-[#765c88] content-stretch flex h-[16px] items-center justify-between left-0 px-[3px] py-[2px] right-0 rounded-tl-[4px] rounded-tr-[4px] top-0" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105026;2017:31799" data-name="Header">
                          <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105026;2017:31800" data-name="Until">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[9px] text-white" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105026;2017:31801">
                              <p className="leading-[normal]">11:30 − 12:30</p>
                            </div>
                          </div>
                          <div className="relative shrink-0 size-[9px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105026;2017:31802" data-name="icons/8px/status/waiting">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons8PxStatusWaiting} />
                          </div>
                        </div>
                        <div className="[word-break:break-word] absolute bg-[#cdb5dc] content-stretch flex flex-col inset-[16px_0_0_0] items-start leading-[normal] not-italic overflow-clip p-[3px] rounded-bl-[4px] rounded-br-[4px] text-[#2b3134] text-[9px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105026;2017:31803" data-name="Content">
                          <p className="font-['Inter:Bold'] font-bold relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105026;2017:31806">
                            Стрижка мужская фейдинг
                          </p>
                          <p className="font-['Inter:Medium'] font-medium relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105026;2017:31807">
                            Валентин
                            <br aria-hidden />
                            +79246479940
                          </p>
                        </div>
                      </div>
                      <div className="absolute bg-[rgba(224,227,235,0.55)] inset-[0_0.63%_78.23%_-0.32%] rounded-[4px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105027" data-name="Brake">
                        <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] left-[4px] not-italic text-[#2b3134] text-[9px] top-[7.5px] whitespace-nowrap" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105027;42:17392">
                          <p className="leading-[normal]">09:00 − 11:20</p>
                        </div>
                      </div>
                      <div className="absolute h-[90px] left-[-0.57px] right-[0.07px] top-[315px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105028" data-name="Event Card Template">
                        <div className="absolute bg-[#1ab394] content-stretch flex h-[16px] items-center justify-between left-0 px-[3px] py-[2px] right-0 rounded-tl-[4px] rounded-tr-[4px] top-0" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105028;2018:32550" data-name="Header">
                          <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105028;2018:32551" data-name="Until">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[9px] text-white" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105028;2018:32552">
                              <p className="leading-[normal]">12:30 − 13:30</p>
                            </div>
                          </div>
                          <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Free:Solid'] justify-center leading-[0] not-italic relative shrink-0 text-[9px] text-center text-white w-[10px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105028;2018:32561">
                            <p className="leading-[normal]">thumbs-up</p>
                          </div>
                        </div>
                        <div className="[word-break:break-word] absolute bg-[#f0a871] content-stretch flex flex-col inset-[16px_0_0_0] items-start leading-[normal] not-italic overflow-clip p-[3px] rounded-bl-[4px] rounded-br-[4px] text-[#2b3134] text-[9px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105028;2018:32554" data-name="Content">
                          <p className="font-['Inter:Bold'] font-bold relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105028;2018:32557">
                            Консультация
                          </p>
                          <p className="font-['Inter:Medium'] font-medium relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105028;2018:32558">
                            Иван
                            <br aria-hidden />
                            +79116800093
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col h-[1115px] items-center min-w-px relative" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105029" data-name="3">
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px relative w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105030">
                        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105031" data-name="Grid 3">
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105032" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105033" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105034" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105035" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105036" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105037" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105038" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105039" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105040" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105041" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105042" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105043" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105044" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105045" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105046" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105047" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105048" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105049" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105050" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105051" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105052" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105053" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105054" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105055" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105056" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105057" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105058" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105059" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105060" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105061" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105062" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105063" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                        </div>
                        <div className="absolute bg-[rgba(224,227,235,0.55)] inset-[0_0.61%_89.24%_0.3%] rounded-[4px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105064" data-name="Brake">
                          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] left-[4px] not-italic text-[#2b3134] text-[9px] top-[7.5px] whitespace-nowrap" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105064;42:17392">
                            <p className="leading-[normal]">09:00 − 10:20</p>
                          </div>
                        </div>
                        <div className="absolute inset-[16.14%_-0.22%_59.64%_-0.11%]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105065" data-name="Event Card Template">
                          <div className="absolute bg-[#1ab394] content-stretch flex h-[16px] items-center justify-between left-0 px-[3px] py-[2px] right-0 rounded-tl-[4px] rounded-tr-[4px] top-0" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105065;2017:31810" data-name="Header">
                            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105065;2017:31811" data-name="Until">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[9px] text-white" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105065;2017:31812">
                                <p className="leading-[normal]">11:00 − 14:00</p>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Free:Solid'] justify-center leading-[0] not-italic relative shrink-0 text-[9px] text-center text-white w-[10px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105065;2018:32533">
                              <p className="leading-[normal]">circle-check</p>
                            </div>
                          </div>
                          <div className="[word-break:break-word] absolute bg-[#acb4f8] content-stretch flex flex-col inset-[16px_0_0_0] items-start leading-[normal] not-italic overflow-clip p-[3px] rounded-bl-[4px] rounded-br-[4px] text-[#2b3134] text-[9px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105065;2017:31814" data-name="Content">
                            <p className="font-['Inter:Bold'] font-bold relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105065;2017:31817">
                              Окрашивание AirTouch + укладка
                            </p>
                            <p className="font-['Inter:Medium'] font-medium relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105065;2017:31818">
                              Любовь
                              <br aria-hidden />
                              +79364237852
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-[1115px] items-center min-w-px relative" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105066" data-name="11">
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px relative w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105067">
                        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105068" data-name="Grid 3">
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105069" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105070" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105071" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105072" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105073" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105074" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105075" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105076" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105077" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105078" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105079" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105080" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105081" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105082" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105083" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105084" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105085" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105086" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105087" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105088" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105089" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105090" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105091" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105092" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105093" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105094" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105095" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105096" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105097" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105098" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105099" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105100" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                        </div>
                        <div className="absolute bg-[rgba(224,227,235,0.55)] inset-[0_0.61%_89.24%_0.3%] rounded-[4px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105101" data-name="Brake">
                          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] left-[4px] not-italic text-[#2b3134] text-[9px] top-[7.5px] whitespace-nowrap" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105101;42:17392">
                            <p className="leading-[normal]">09:00 − 10:20</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-[12.11%_0.22%_74.44%_0.22%]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105102" data-name="Event Card Template">
                        <div className="absolute bg-[#1ab394] content-stretch flex h-[16px] items-center justify-between left-0 px-[3px] py-[2px] right-0 rounded-tl-[4px] rounded-tr-[4px] top-0" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105102;2018:32564" data-name="Header">
                          <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105102;2018:32565" data-name="Until">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[9px] text-white" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105102;2018:32566">
                              <p className="leading-[normal]">11:30 − 12:30</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105102;2018:32574" data-name="Icons">
                            <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Free:Solid'] justify-center leading-[0] not-italic relative shrink-0 text-[9px] text-center text-white w-[10px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105102;2018:32577">
                              <p className="leading-[normal]">exclamation-circle</p>
                            </div>
                          </div>
                        </div>
                        <div className="[word-break:break-word] absolute bg-[#f5c56b] content-stretch flex flex-col inset-[16px_0_0_0] items-start leading-[normal] not-italic overflow-clip p-[3px] rounded-bl-[4px] rounded-br-[4px] text-[#2b3134] text-[9px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105102;2018:32568" data-name="Content">
                          <p className="font-['Inter:Bold'] font-bold relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105102;2018:32571">
                            Стрижка машинкой
                          </p>
                          <p className="font-['Inter:Medium'] font-medium relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105102;2018:32572">
                            Павел
                            <br aria-hidden />
                            +79991178093
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-[1115px] items-center min-w-px relative" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105103" data-name="13">
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px relative w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105104">
                        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105105" data-name="Grid 3">
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105106" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105107" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105108" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105109" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105110" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105111" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105112" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105113" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105114" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105115" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105116" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105117" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105118" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105119" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105120" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105121" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105122" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105123" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105124" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105125" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105126" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105127" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105128" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105129" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105130" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105131" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105132" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105133" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105134" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105135" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105136" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105137" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="absolute h-[180px] left-[-0.29px] right-[-0.21px] top-[120px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105138" data-name="Event Card Template">
                            <div className="absolute bg-[#1ab394] content-stretch flex h-[16px] items-center justify-between left-0 px-[3px] py-[2px] right-0 rounded-tl-[4px] rounded-tr-[4px] top-0" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105138;2018:32550" data-name="Header">
                              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105138;2018:32551" data-name="Until">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[9px] text-white" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105138;2018:32552">
                                  <p className="leading-[normal]">10:20 − 12:20</p>
                                </div>
                              </div>
                              <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Free:Solid'] justify-center leading-[0] not-italic relative shrink-0 text-[9px] text-center text-white w-[10px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105138;2018:32561">
                                <p className="leading-[normal]">thumbs-up</p>
                              </div>
                            </div>
                            <div className="[word-break:break-word] absolute bg-[#f0a871] content-stretch flex flex-col inset-[16px_0_0_0] items-start leading-[normal] not-italic overflow-clip p-[3px] rounded-bl-[4px] rounded-br-[4px] text-[#2b3134] text-[9px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105138;2018:32554" data-name="Content">
                              <p className="font-['Inter:Bold'] font-bold relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105138;2018:32557">
                                Маникюр с покрытием
                              </p>
                              <p className="font-['Inter:Medium'] font-medium relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105138;2018:32558">
                                Алена
                                <br aria-hidden />
                                +79090098701
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bg-[rgba(224,227,235,0.55)] inset-[0_0.61%_89.24%_0.3%] rounded-[4px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105139" data-name="Brake">
                          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] left-[4px] not-italic text-[#2b3134] text-[9px] top-[7.5px] whitespace-nowrap" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105139;42:17392">
                            <p className="leading-[normal]">09:00 − 10:20</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-[28.25%_-0.11%_62.33%_-0.22%]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105140" data-name="Event Card Template">
                        <div className="absolute bg-[#765c88] content-stretch flex h-[16px] items-center justify-between left-0 px-[3px] py-[2px] right-0 rounded-tl-[4px] rounded-tr-[4px] top-0" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105140;2017:31799" data-name="Header">
                          <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105140;2017:31800" data-name="Until">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[9px] text-white" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105140;2017:31801">
                              <p className="leading-[normal]">12:30 − 14:00</p>
                            </div>
                          </div>
                          <div className="relative shrink-0 size-[9px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105140;2017:31802" data-name="icons/8px/status/waiting">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons8PxStatusWaiting} />
                          </div>
                        </div>
                        <div className="[word-break:break-word] absolute bg-[#cdb5dc] content-stretch flex flex-col inset-[16px_0_0_0] items-start leading-[normal] not-italic overflow-clip p-[3px] rounded-bl-[4px] rounded-br-[4px] text-[#2b3134] text-[9px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105140;2017:31803" data-name="Content">
                          <p className="font-['Inter:Bold'] font-bold relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105140;2017:31806">
                            Аппаратный маникюр и снятие
                          </p>
                          <p className="font-['Inter:Medium'] font-medium relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105140;2017:31807">
                            Алиса
                            <br aria-hidden />
                            +79995569590
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-[1115px] items-center min-w-px relative" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105141" data-name="12">
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px relative w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105142">
                        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105143" data-name="Grid 3">
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105144" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105145" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105146" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105147" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105148" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105149" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105150" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105151" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105152" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105153" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105154" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105155" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105156" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105157" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105158" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105159" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105160" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105161" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105162" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105163" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105164" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105165" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105166" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105167" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105168" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105169" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105170" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105171" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105172" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105173" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105174" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                          <div className="h-[30px] relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105175" data-name="Lines">
                            <div className="absolute inset-[-1.67%_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLines} />
                            </div>
                          </div>
                        </div>
                        <div className="absolute bg-[rgba(224,227,235,0.55)] inset-[0_0.61%_89.24%_0.3%] rounded-[4px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105176" data-name="Brake">
                          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] left-[4px] not-italic text-[#2b3134] text-[9px] top-[7.5px] whitespace-nowrap" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105176;42:17392">
                            <p className="leading-[normal]">09:00 − 10:20</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-[18.83%_0.34%_70.4%_0.11%]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105177" data-name="Event Card Template">
                        <div className="absolute bg-[#1ab394] content-stretch flex h-[16px] items-center justify-between left-0 px-[3px] py-[2px] right-0 rounded-tl-[4px] rounded-tr-[4px] top-0" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105177;2017:31810" data-name="Header">
                          <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105177;2017:31811" data-name="Until">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[9px] text-white" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105177;2017:31812">
                              <p className="leading-[normal]">11:30 − 12:30</p>
                            </div>
                          </div>
                          <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Free:Solid'] justify-center leading-[0] not-italic relative shrink-0 text-[9px] text-center text-white w-[10px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105177;2018:32533">
                            <p className="leading-[normal]">circle-check</p>
                          </div>
                        </div>
                        <div className="[word-break:break-word] absolute bg-[#acb4f8] content-stretch flex flex-col inset-[16px_0_0_0] items-start leading-[normal] not-italic overflow-clip p-[3px] rounded-bl-[4px] rounded-br-[4px] text-[#2b3134] text-[9px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105177;2017:31814" data-name="Content">
                          <p className="font-['Inter:Bold'] font-bold relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105177;2017:31817">
                            Тайский массаж
                          </p>
                          <p className="font-['Inter:Medium'] font-medium relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105177;2017:31818">
                            Маргарита
                            <br aria-hidden />
                            +79145537904
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-[10.76%_-0.44%_81.17%_0.11%]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105186" data-name="Event Card Template">
                        <div className="absolute bg-[#1ab394] content-stretch flex h-[16px] items-center justify-between left-0 px-[3px] py-[2px] right-0 rounded-tl-[4px] rounded-tr-[4px] top-0" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105186;2018:32536" data-name="Header">
                          <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105186;2018:32537" data-name="Until">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[9px] text-white" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105186;2018:32538">
                              <p className="leading-[normal]">10:20 − 11:30</p>
                            </div>
                          </div>
                          <div className="relative shrink-0 size-[9.46px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105186;2018:32546" data-name="icons/8px/status/circleMinus">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcons8PxStatusCircleMinus} />
                          </div>
                        </div>
                        <div className="[word-break:break-word] absolute bg-[#fd8787] content-stretch flex flex-col inset-[16px_0_0_0] items-start leading-[normal] not-italic overflow-clip p-[3px] rounded-bl-[4px] rounded-br-[4px] text-[#2b3134] text-[9px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105186;2018:32540" data-name="Content">
                          <p className="font-['Inter:Bold'] font-bold relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105186;2018:32543">
                            Массаж горячими камнями
                          </p>
                          <p className="font-['Inter:Medium'] font-medium relative shrink-0 w-full" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105186;2018:32544">
                            Вячеслав
                            <br aria-hidden />
                            +79092267043
                          </p>
                        </div>
                      </div>
                      <div className="absolute h-[90px] left-0 right-0 top-[330px]" data-name="Event Card Template" data-group-event="true">
                        <div className="absolute bg-[#51b49f] content-stretch flex h-[16px] items-center justify-between left-0 px-[3px] py-[2px] right-0 rounded-tl-[4px] rounded-tr-[4px] top-0" data-name="Header">
                          <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[9px] text-white">
                              <p className="leading-[normal]">12:40 − 13:40</p>
                            </div>
                          </div>
                          <div className="flex size-[12px] shrink-0 items-center justify-center overflow-hidden">
                            <img alt="Групповое событие" className="block max-w-none scale-[0.6]" src={imgClients} />
                          </div>
                        </div>
                        <div className="[word-break:break-word] absolute bg-[#70ad5e] content-stretch flex flex-col inset-[16px_0_0_0] items-start leading-[normal] not-italic overflow-clip p-[3px] rounded-bl-[4px] rounded-br-[4px] text-[#2b3134] text-[9px]" data-name="Content">
                          <p className="font-['Inter:Bold'] font-bold relative shrink-0 w-full">
                            (6/10) Воркаут
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute content-stretch flex items-center left-[-6.45%] right-[-6.45%] top-[245px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105187" data-name="Timeline">
                      <div className="bg-[#2b3134] content-stretch drop-shadow-[0px_1px_1px_rgba(33,47,65,0.35)] flex items-start px-[5px] py-[2px] relative rounded-[4px] shrink-0" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105188">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffcb00] text-[12px] whitespace-nowrap" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105189">
                          <p className="leading-[16px]">11:49</p>
                        </div>
                      </div>
                      <div className="flex-[1_0_0] h-0 min-w-px relative" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105190">
                        <div className="absolute inset-[-2px_-0.18%_-3px_-0.18%]">
                          <img alt="" className="block max-w-none size-full" src={imgLine1} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal h-full items-start leading-[0] not-italic relative shrink-0 text-right w-[60px] whitespace-nowrap" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191" data-name="Time">
                    <TimeSlot className="h-[90px] relative shrink-0 w-[60px]" />
                    <div className="h-[90px] relative shrink-0 w-[60px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5637" data-name="Time Slot">
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[5px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5637;42:17384">
                        <p className="leading-[16px]">00</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[32px] text-[#2b3134] text-[16px] top-[6px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5637;42:17385">
                        <p className="leading-[24px]">10</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[35px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5637;42:17386">
                        <p className="leading-[16px]">20</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[65px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5637;42:17387">
                        <p className="leading-[16px]">40</p>
                      </div>
                    </div>
                    <div className="h-[90px] relative shrink-0 w-[60px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5642" data-name="Time Slot">
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[5px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5642;42:17384">
                        <p className="leading-[16px]">00</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[32px] text-[#2b3134] text-[16px] top-[6px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5642;42:17385">
                        <p className="leading-[24px]">11</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[35px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5642;42:17386">
                        <p className="leading-[16px]">20</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[65px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5642;42:17387">
                        <p className="leading-[16px]">40</p>
                      </div>
                    </div>
                    <div className="h-[90px] relative shrink-0 w-[60px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5647" data-name="Time Slot">
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[5px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5647;42:17384">
                        <p className="leading-[16px]">00</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[32px] text-[#2b3134] text-[16px] top-[6px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5647;42:17385">
                        <p className="leading-[24px]">12</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[35px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5647;42:17386">
                        <p className="leading-[16px]">20</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[65px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5647;42:17387">
                        <p className="leading-[16px]">40</p>
                      </div>
                    </div>
                    <div className="h-[90px] relative shrink-0 w-[60px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5652" data-name="Time Slot">
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[5px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5652;42:17384">
                        <p className="leading-[16px]">00</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[32px] text-[#2b3134] text-[16px] top-[6px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5652;42:17385">
                        <p className="leading-[24px]">13</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[35px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5652;42:17386">
                        <p className="leading-[16px]">20</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[65px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5652;42:17387">
                        <p className="leading-[16px]">40</p>
                      </div>
                    </div>
                    <div className="h-[90px] relative shrink-0 w-[60px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5657" data-name="Time Slot">
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[5px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5657;42:17384">
                        <p className="leading-[16px]">00</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[32px] text-[#2b3134] text-[16px] top-[6px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5657;42:17385">
                        <p className="leading-[24px]">14</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[35px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5657;42:17386">
                        <p className="leading-[16px]">20</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[65px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5657;42:17387">
                        <p className="leading-[16px]">40</p>
                      </div>
                    </div>
                    <div className="h-[90px] relative shrink-0 w-[60px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5662" data-name="Time Slot">
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[5px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5662;42:17384">
                        <p className="leading-[16px]">00</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[32px] text-[#2b3134] text-[16px] top-[6px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5662;42:17385">
                        <p className="leading-[24px]">15</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[35px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5662;42:17386">
                        <p className="leading-[16px]">20</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[65px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5662;42:17387">
                        <p className="leading-[16px]">40</p>
                      </div>
                    </div>
                    <div className="h-[90px] relative shrink-0 w-[60px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5667" data-name="Time Slot">
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[5px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5667;42:17384">
                        <p className="leading-[16px]">00</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[32px] text-[#2b3134] text-[16px] top-[6px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5667;42:17385">
                        <p className="leading-[24px]">16</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[35px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5667;42:17386">
                        <p className="leading-[16px]">20</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[65px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5667;42:17387">
                        <p className="leading-[16px]">40</p>
                      </div>
                    </div>
                    <div className="h-[90px] relative shrink-0 w-[60px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5672" data-name="Time Slot">
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[5px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5672;42:17384">
                        <p className="leading-[16px]">00</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[32px] text-[#2b3134] text-[16px] top-[6px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5672;42:17385">
                        <p className="leading-[24px]">17</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[35px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5672;42:17386">
                        <p className="leading-[16px]">20</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[65px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5672;42:17387">
                        <p className="leading-[16px]">40</p>
                      </div>
                    </div>
                    <div className="h-[90px] relative shrink-0 w-[60px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5677" data-name="Time Slot">
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[5px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5677;42:17384">
                        <p className="leading-[16px]">00</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[32px] text-[#2b3134] text-[16px] top-[6px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5677;42:17385">
                        <p className="leading-[24px]">18</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[35px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5677;42:17386">
                        <p className="leading-[16px]">20</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[65px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5677;42:17387">
                        <p className="leading-[16px]">40</p>
                      </div>
                    </div>
                    <div className="h-[90px] relative shrink-0 w-[60px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5682" data-name="Time Slot">
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[48px] text-[#71757f] text-[12px] top-[5px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5682;42:17384">
                        <p className="leading-[16px]">00</p>
                      </div>
                      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col justify-center left-[32px] text-[#2b3134] text-[16px] top-[6px]" data-node-id="I2075:101503;3390:128727;3444:204107;2076:105191;1:5682;42:17385">
                        <p className="leading-[24px]">19</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Toolbar className="bg-[#f5f5f5] content-stretch flex flex-col h-full items-center justify-between pb-[16px] pt-[12px] px-[8px] relative shrink-0 w-[48px]" />
      </div>
      {appointment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-[28px] py-[40px]" onClick={(event) => { event.stopPropagation(); if (event.target === event.currentTarget) setAppointment(null); }}>
          <div className="h-[calc(100dvh-80px)] w-[1200px] shrink-0" role="dialog" aria-modal="true" aria-label={`Запись клиента ${appointment.client}`}>
            <AppointmentModal appointment={appointment} onClose={() => setAppointment(null)} />
          </div>
        </div>
      )}
      {groupAppointmentOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-[28px] py-[40px]" onClick={(event) => { event.stopPropagation(); if (event.target === event.currentTarget) setGroupAppointmentOpen(false); }}>
          <div className="h-[calc(100dvh-80px)] w-[1200px] shrink-0" role="dialog" aria-modal="true" aria-label="Групповая запись">
            <GroupAppointmentModal onClose={() => setGroupAppointmentOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
