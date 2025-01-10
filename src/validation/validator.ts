import { addOptions } from '../model/shared/model-service';

export function Validator(target: Object,
  propertyName: string,
  descriptor: TypedPropertyDescriptor<any>) {
  addOptions(target, {
    validate: {
      [propertyName]: descriptor.value,
    },
  });
}
