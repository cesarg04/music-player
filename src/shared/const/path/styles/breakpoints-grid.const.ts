interface IScreenStyles {
    [key: number]: string;
}

const smStyles:IScreenStyles = {
    1: 'sm:col-span-1',
    2: 'sm:col-span-2',
    3: 'sm:col-span-3',
    4: 'sm:col-span-4',
    5: 'sm:col-span-5',
    6: 'sm:col-span-6',
    7: 'sm:col-span-7',
    8: 'sm:col-span-8',
    9: 'sm:col-span-9',
    10: 'sm:col-span-10',
    11: 'sm:col-span-11',
    12: 'sm:col-span-12',
}
export const mdStyles:IScreenStyles = {
    1: 'md:col-span-1',
    2: 'md:col-span-2',
    3: 'md:col-span-3',
    4: 'md:col-span-4',
    5: 'md:col-span-5',
    6: 'md:col-span-6',
    7: 'md:col-span-7',
    8: 'md:col-span-8',
    9: 'md:col-span-9',
    10: 'md:col-span-10',
    11: 'md:col-span-11',
    12: 'md:col-span-12',
}

export const lgStyles:IScreenStyles = {
    1: 'lg:col-span-1',
    2: 'lg:col-span-2',
    3: 'lg:col-span-3',
    4: 'lg:col-span-4',
    5: 'lg:col-span-5',
    6: 'lg:col-span-6',
    7: 'lg:col-span-7',
    8: 'lg:col-span-8',
    9: 'lg:col-span-9',
    10: 'lg:col-span-10',
    11: 'lg:col-span-11',
    12: 'lg:col-span-12',
}

export const xlStyles: IScreenStyles = {
    1: 'xl:col-span-1',
    2: 'xl:col-span-2',
    3: 'xl:col-span-3',
    4: 'xl:col-span-4',
    5: 'xl:col-span-5',
    6: 'xl:col-span-6',
    7: 'xl:col-span-7',
    8: 'xl:col-span-8',
    9: 'xl:col-span-9',
    10: 'xl:col-span-10',
    11: 'xl:col-span-11',
    12: 'xl:col-span-12',
}



export const breakpointsStyles = {
    sm: {
        ...smStyles
    },
    md: {
        ...mdStyles
    },
    lg: {
        ...lgStyles
    },
    xl: {
        ...xlStyles
    }
}    

