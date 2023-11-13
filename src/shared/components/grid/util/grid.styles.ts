interface IStyles {
    [key: string]: string;
}

export const justifyStyles: IStyles = {
    'normal': "justify-normal",
    'start': 'justify-start',
    'end': 'justify-end',
    'center': 'justify-center',
    'between': 'justify-between',
    'around': 'justify-around',
    'evenly': 'justify-evenly',
    'stretch': 'justify-stretch',
}

export const justifyItemsStyles: IStyles = {
    'start':    'justify-items-start',
    'end':      'justify-items-end',
    'center':   'justify-items-center',
    'stretch':  'justify- items - stretch'
}


export const alignItemsStyles: IStyles = {
    'start':    'items-start',
    'end':      'items-end',
    'center':   'items-center',
    'baseline': 'items-baseline',
    'stretch':  'items-stretch'
}