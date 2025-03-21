const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Configuração do diretório de testes
    specPattern: "cypress/integration/**/*.spec.js",  // Define o padrão de busca para os arquivos de teste
    supportFile: "cypress/support/e2e.js",  // Arquivo de suporte global (opcional)
    
    // Configurações de visualização e captura de vídeo
    video: true, // Habilitar gravação de vídeo dos testes
    videoCompression: 32, // Nível de compressão do vídeo

    // Configuração de rede (timeout)
    defaultCommandTimeout: 8000,  // Tempo máximo de espera para comandos
    pageLoadTimeout: 60000,  // Tempo máximo de espera para o carregamento de páginas

    // Event listeners de Node.js
    setupNodeEvents(on, config) {
      // Exemplo de listener para log de eventos
      on('before:run', () => {
        console.log("Iniciando os testes...");
      });

      return config;
    },
  },
});
