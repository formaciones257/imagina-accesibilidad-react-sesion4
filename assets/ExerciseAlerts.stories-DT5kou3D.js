import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-DuVujRmb.js";import"./preload-helper-PPVm8Dsz.js";const t=()=>{const[n,o]=i.useState(null),[a,s]=i.useState(null),c=()=>{o("Sus cambios han sido guardados correctamente."),setTimeout(()=>o(null),5e3)},l=()=>{s("No se pudo conectar con el servidor. Inténtelo de nuevo."),setTimeout(()=>s(null),5e3)};return e.jsxs("section",{className:"p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900",children:"Alertas y notificaciones"}),e.jsx("p",{className:"text-slate-600",children:"Implementación de mensajes de estado que los lectores de pantalla anuncian automáticamente."}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{onClick:c,className:"px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-700 focus:ring-2 focus:ring-green-500 outline-none",children:"Notificación de éxito"}),e.jsx("button",{onClick:l,className:"px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-500 outline-none",children:"Alerta de error"})]}),e.jsx("div",{"aria-live":"polite",className:"h-12 flex items-center",children:n&&e.jsx("div",{className:"bg-green-100 text-green-800 px-4 py-2 rounded-md w-full border border-green-200",children:n})}),e.jsx("div",{role:"alert",className:"h-12 flex items-center",children:a&&e.jsx("div",{className:"bg-red-100 text-red-800 px-4 py-2 rounded-md w-full border border-red-200 font-bold",children:a})}),e.jsx("div",{className:"bg-amber-50 p-4 rounded-md border border-amber-200",children:e.jsxs("p",{className:"text-sm text-amber-800",children:[e.jsx("strong",{children:"Importante:"})," Use ",e.jsx("code",{children:'aria-live="polite"'})," para información no crítica y",e.jsx("code",{children:'role="alert"'})," (que equivale a ",e.jsx("code",{children:'aria-live="assertive"'}),") solo para errores o información que requiera atención inmediata."]})})]})};t.__docgenInfo={description:`Ejercicio 3: Alertas y notificaciones.

Uso de \`role="alert"\` para notificaciones críticas y \`aria-live\` para
actualizaciones de contenido que los lectores de pantalla deben anunciar.

Cumple con WCAG 2.2:
- 3.3.1: Identificación de errores.
- 4.1.3: Mensajes de estado (notificar sin mover el foco).`,methods:[],displayName:"ExerciseAlerts"};const p={title:"Ejercicios/ExerciseAlerts",component:t,parameters:{layout:"centered"}},r={render:()=>e.jsx(t,{})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <ExerciseAlerts />
}`,...r.parameters?.docs?.source},description:{story:`Historia por defecto del componente inaccesible.

INSTRUCCIONES PARA CLASE:
1. Abre este componente en la interfaz de Storybook.
2. En el panel inferior/lateral, haz clic en la pestaña "Accessibility".
3. Revisa el reporte generado automáticamente que listará las violaciones detectadas
   (contraste, etiquetas de imagen y roles de botón).`,...r.parameters?.docs?.description}}};const x=["Default"];export{r as Default,x as __namedExportsOrder,p as default};
