export interface IUseRipple {
    ripples: React.ReactNode[];
    addRipple: () => void;
}
export declare const useRipple: (rippleColor: string) => IUseRipple;
