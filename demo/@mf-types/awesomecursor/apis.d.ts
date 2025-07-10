
    export type RemoteKeys = 'awesomecursor';
    type PackageType<T> = T extends 'awesomecursor' ? typeof import('awesomecursor') :any;