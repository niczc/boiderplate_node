// import { AppError, Zero } from '../../../../core';

export class TodoEntity {
    constructor(
        public id: number,
        public text: string,
        public isCompleted: boolean = false
    ) {}
}