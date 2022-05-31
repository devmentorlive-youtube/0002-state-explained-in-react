import TextField from "@/ui/text-field";

export default function CustomerForm({ value, onChange = () => {} }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-6xl font-black uppercase">Editing Customer</div>

      <div>
        <div className="font-bold text-2xl uppercase my-4">Personal info</div>
        <div className="w-full flex gap-8">
          <div className="w-2/5">
            <TextField
              value={value.name}
              onChange={(name) =>
                onChange({
                  ...value,
                  name,
                })
              }
            />
          </div>
          <div className="w-3/5">
            <TextField
              value={value.email}
              onChange={(email) =>
                onChange({
                  ...value,
                  email,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-8">
        <div className="w-full">
          <div className="font-bold text-2xl uppercase my-4">
            Shipping address
          </div>
          <TextField
            value={value.address?.street}
            onChange={(street) =>
              onChange({
                ...value,
                address: {
                  ...value.address,
                  street,
                },
              })
            }
          />
        </div>
        <div className="w-full flex gap-8">
          <div className="w-1/2">
            <TextField
              value={value.address.city}
              onChange={(city) =>
                onChange({
                  ...value,
                  address: {
                    ...value.address,
                    city,
                  },
                })
              }
            />
          </div>
          <div className="w-1/2">
            <TextField
              value={value.address.state}
              onChange={(state) =>
                onChange({
                  ...value,
                  address: {
                    ...value.address,
                    state,
                  },
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
