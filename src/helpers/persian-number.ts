const faFormatter = new Intl.NumberFormat("fa")

export const PersianNumber = (n : number) => {
    return faFormatter.format(n)
}