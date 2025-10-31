import { useState, useEffect, RefObject } from 'react';

/**
 * Hook customizado para detectar se um elemento está visível na tela.
 * Anima apenas uma vez.
 * * @param ref - A referência (useRef) para o elemento DOM que queremos observar.
 * @param options - Opções do IntersectionObserver (ex: { threshold: 0.1 })
 * @returns boolean - true se o elemento estiver visível, false caso contrário.
 */
export function useInView(
  ref: RefObject<Element>,
  options: IntersectionObserverInit = { threshold: 0.1 }
) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // O Observer que vai "assistir" o elemento
    const observer = new IntersectionObserver(([entry]) => {
      // Quando o elemento estiver visível (isIntersecting)
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(element); // Para de "assistir" depois de animar uma vez
      }
    }, options);

    // Começa a "assistir" o elemento
    observer.observe(element);

    // Limpa o observer quando o componente é desmontado
    return () => {
      observer.disconnect();
    };
  }, [ref, options]); // Roda o efeito novamente se a ref ou as opções mudarem

  return isInView;
}