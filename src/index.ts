import AValidator from "./types/validator";
import {IDefaultScheme, IValidationScheme} from "./types/validation";

export default class Validator extends AValidator<IDefaultScheme> {
	public schema: IValidationScheme<IDefaultScheme>;

	constructor(schema: IValidationScheme<IDefaultScheme>) {
		super();
		this.schema = schema;
	}

	public validate = (string: string, key?: string): { [key: string]: IDefaultScheme } | boolean => {
		for (let i = 0; i < Object.entries(this.schema).length; i++){
			const [key_, value]: [string, IDefaultScheme] = Object.entries(this.schema)[i];
			if (new RegExp(value.regex).test(string) && !key ? true : (key === key_)) {
				if (key)
					return ({ [key_]: {regex: value.regex} })
				else
					return true;
			}
		}
		if (key)
			return {};
		else
			return false;
	};

	public get scheme(): typeof this.schema {
		return this.schema;
	}
}