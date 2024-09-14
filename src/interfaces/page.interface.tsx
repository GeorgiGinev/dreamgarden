export interface PageTitleInterface {
    primaryTitle: string | undefined,
    setPrimaryTitle: (data: string) => void,
    secondaryTitle: string | undefined,
    setSecondaryTitle: (data: string) => void,
    isContactFormVisible: boolean,
    setIsContactFormVisible: (isVisible: boolean) => void,
    setPageImage: (image: string) => void
}