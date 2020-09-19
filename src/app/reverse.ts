import { Pipe, PipeTransform} from "@angular/core";
@Pipe ({
    name : 'Reverse',
    pure: true
})
export class ReverseSen implements PipeTransform
{
    transform(value: string): string
    {
        let newStr = `${'1'} ${value} ${'2'}`;
        return newStr;

    }
}
