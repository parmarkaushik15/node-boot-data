import { addAttributeOptions } from '../attribute-service';

/**
 * Sets the specified comment value for the annotated field
 */
export function Comment(value: string) {
  return (target: any, propertyName: string) => {
    addAttributeOptions(target, propertyName, {
      comment: value,
    });
  };
}
