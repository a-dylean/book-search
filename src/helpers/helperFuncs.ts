export const renderArrWithCommas = (arr: string[] | undefined | null): string => {
    if (!arr) {
      return "";
    } else {
      if (arr.length === 0) {
        return "";
      } else if (arr.length === 1) {
        return arr[0];
      } else {
        const lastIndex = arr.length - 1;
        const formattedArray = arr.slice(0, lastIndex).join(", ");
        return `${formattedArray}, ${arr[lastIndex]}`;
      }
    }
  }