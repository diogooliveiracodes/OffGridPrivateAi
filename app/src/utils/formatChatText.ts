export const formatChatText = (text: string) => {
  return text
    // Adiciona quebra de linha antes de títulos em negrito
    .replace(/\*\*(.*?)\*\*/g, '\n\n<strong>$1</strong>')
    // Transforma itens de lista em bullets
    .replace(/\n\s*\*\s(.*?)(?=\n|$)/g, '\n• $1')
    // Reduz múltiplas quebras de linha para duas
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}