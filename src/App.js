import React from 'react';
import './App.css';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import doc from './docs/spec.yaml';

function App() {
	return <SwaggerUI url={doc} />;
}

export default App;
