import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class SocieteDto extends BaseDto{

    public code: string;

    public ice: string;

    public rc: string;

    

    constructor() {
        super();

        this.code = '';
        this.ice = '';
        this.rc = '';

        }

}
