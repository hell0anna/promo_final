import { createPortal } from 'react-dom';

export default function PromoToast({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  if (!visible) return null;

  return createPortal(
    <div className="fixed left-1/2 top-[16px] z-[999] flex min-h-[48px] min-w-[320px] -translate-x-1/2 items-center gap-[12px] rounded-[12px] bg-[#262626] px-[14px] py-[12px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.2)]">
      <div className="flex size-[20px] shrink-0 items-center justify-center rounded-full bg-[#21c84b] font-['Inter:Semi_Bold'] text-[12px] font-semibold leading-none text-white">
        ✓
      </div>
      <p className="flex-1 font-['Inter:Regular'] text-[14px] leading-[20px] text-white">Промокод приненен</p>
      <button type="button" aria-label="Закрыть" onClick={onClose} className="flex size-[20px] shrink-0 items-center justify-center rounded-[4px] font-['Inter:Regular'] text-[18px] leading-none text-white/80 hover:bg-white/10 hover:text-white">
        ×
      </button>
    </div>,
    document.body,
  );
}
