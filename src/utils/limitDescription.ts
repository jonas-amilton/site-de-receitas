// Função para limitar a descrição para um número específico de palavras
export const limitDescription = (description: string, numWords: number) => {
    const words = description.split(" ");
    if (words.length <= numWords) {
      return description;
    }
    const limitWords = words.slice(0, numWords);
    return `${limitWords.join(" ")}...`;
  };