/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Atualiza o state para que a próxima renderização mostre a UI alternativa.
    console.log('PASSOOOU no statico');
    return { hasError: true };
  }

  componentDidUpdate() {
    console.log('ATUALIZOU O ERRO');
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log('PASSOOOU');
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      // Você pode renderizar qualquer UI alternativa
      return <h1>Algo deu errado.</h1>;
    }

    return children;
  }
}
