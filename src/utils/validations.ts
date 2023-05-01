/**
 * validates number to have decimals too
 * 
 * @param value input string
 * @returns validated input string
 */
export const validateNumber = (value: string) => {
    const regex = /\d*[.]?\d*/
    const realValue = value.match(regex)?.join("")
    return(realValue || "")
}