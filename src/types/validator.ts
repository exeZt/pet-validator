import {IDefaultScheme, IValidationScheme} from "./validation";

export default abstract class AValidator<T> {
	public abstract schema: IValidationScheme<T>;
	public abstract validate (string: string, key?: string): { [key: string]: IDefaultScheme } | boolean
}