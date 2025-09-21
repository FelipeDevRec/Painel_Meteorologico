# Painel Meteorológico

Um aplicativo web desenvolvido em **React + Vite** que exibe informações meteorológicas em tempo real.  
O usuário pode pesquisar por cidades e visualizar dados como temperatura, sensação térmica, umidade e velocidade do vento.  

---

## Tecnologias Utilizadas

- [React](https://react.dev/) - Biblioteca para construção da interface
- [Vite](https://vitejs.dev/) - Ferramenta de build rápida
- [OpenWeatherMap API](https://openweathermap.org/api) - Fonte dos dados meteorológicos
- [CSS Modules] ou [Tailwind] (dependendo da sua estilização)

---

## Estrutura do Projeto

```
painel-meteorologico/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── ThemeSwitcher.jsx
│   │   ├── WeatherDisplay.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── .env.example
├── .env.local
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## Configuração do Ambiente

### Clonar o repositório
```bash
git clone https://github.com/FelipeDevRec/Painel_Meteorologico.git
cd Painel_Meteorologico
```

### Instalar dependências
```bash
npm install
```

### Configurar variáveis de ambiente
Crie um arquivo **.env.local** na raiz do projeto e adicione sua chave da API do OpenWeatherMap:

```
VITE_API_KEY=SUA_CHAVE_AQUI
```

### Rodar o servidor de desenvolvimento
```bash
npm run dev
```

Abra no navegador:  
👉 [http://localhost:5173](http://localhost:5173)

### 5️⃣ Gerar build de produção
```bash
npm run build
npm run preview
```

---

## Funcionalidades

- Buscar clima por cidade
- Exibir temperatura, sensação térmica, umidade e vento
- Troca de tema claro/escuro
- Interface simples e responsiva

---

## Demonstração

![Preview do Painel](./modo%20claro.png)
![Preview Dark Mode](./modo%20escuro.png)

---

## Licença

Este projeto é de uso educacional.  
Sinta-se livre para modificar e usar como desejar

---

👨‍💻 Desenvolvido por [Felipe Alves]
