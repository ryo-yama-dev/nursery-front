import Group, { RadioGroupProps } from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Comp from "@mui/material/Radio"

export interface RadioProps extends Omit<RadioGroupProps, "onChange"> {
  items: Array<{ value: any; label: string }>
  onChange: (value: any) => void
}

export const Radio = ({ items, onChange, ...rest }: RadioProps) => {
  return (
    <Group onChange={(e) => onChange(e.target.value)} {...rest}>
      {items.map(({ value, label }) => (
        <FormControlLabel
          key={value}
          value={value}
          control={<Comp />}
          label={label}
        />
      ))}
    </Group>
  )
}
