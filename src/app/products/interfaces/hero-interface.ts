
export enum Color {
    red, black, blue, green
}


export interface Hero {
    name: string;
    nameInsideOut?: string;
    canFly: boolean;
    canFlyInsideOut?: boolean;
    color: Color;
    colorInsideOut?: Color;
}