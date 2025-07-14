interface CheckBoxProps {
    label?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

export const CheckBox: React.FC<CheckBoxProps> = ({ label, checked, onChange }) => {
  return (
    <div className="text-[#515B6F] text-[16px] font-normal mb-5 flex items-center gap-2">
      <input type="checkbox" checked={checked} onChange={(e) => onChange?.(e.target.checked)} />
      <h1>{label}</h1>
    </div>
  );
};
 
