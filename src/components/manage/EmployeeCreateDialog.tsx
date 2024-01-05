import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Radio,
  Select,
  MenuItem,
  TextField,
} from "components/common"
import { EmployeeCreateInput, Job, Sex } from "lib/graphql"

export interface EmployeeCreateDialogProps {
  isOpen: boolean
  jobs: Job[]
  onClose: () => void
  handleCreate: (input: EmployeeCreateInput) => Promise<void>
}

export const EmployeeCreateDialog = ({
  isOpen,
  jobs,
  onClose,
  handleCreate,
}: EmployeeCreateDialogProps) => {
  const [jobId, setJobId] = useState<number>(0)
  const [sex, setSex] = useState<Sex>(Sex.Male)
  const { control, getValues, reset } = useForm<EmployeeCreateInput>({
    defaultValues: {
      name: "",
      belong: true,
      authId: "",
    },
  })

  const onSubmit = () => {
    // TODO: バリデーション処理
    const data: EmployeeCreateInput = {
      ...getValues(),
      jobId: jobId,
      sex: sex,
    }
    console.log(data)
    handleCreate(data)
      .then(() => {
        reset()
        setJobId(0)
        setSex(Sex.Male)
        onClose()
      })
      .catch((e) => console.log(e))
  }

  return (
    <Dialog open={isOpen}>
      <DialogTitle>従業員登録</DialogTitle>
      <DialogContent dividers>
        <div className="grid grid-cols-2 gap-4">
          <Controller
            name="name"
            control={control}
            render={({ field }) => <TextField label="名前" {...field} />}
          />
          <Controller
            name="authId"
            control={control}
            render={({ field }) => <TextField label="認証ID" {...field} />}
          />
          <Select
            value={jobId}
            onChange={(e) => setJobId(Number(e.target.value))}
            label="役職"
          >
            <MenuItem value={0}>
              <em>未選択</em>
            </MenuItem>
            {jobs.map((job) => (
              <MenuItem key={job.id} value={job.id}>
                {job.name}
              </MenuItem>
            ))}
          </Select>
          <Radio
            value={sex}
            onChange={setSex}
            items={[
              { label: "男性", value: Sex.Male },
              { label: "女性", value: Sex.Female },
            ]}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>閉じる</Button>
        <Button type="submit" onClick={onSubmit}>
          登録
        </Button>
      </DialogActions>
    </Dialog>
  )
}
