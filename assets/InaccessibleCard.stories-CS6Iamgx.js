import{j as e}from"./jsx-runtime-u17CrQMm.js";const t=()=>{const a=()=>{alert("¡Botón pulsado!")};return e.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg shadow-sm max-w-sm m-4 bg-white",children:[e.jsx("h1",{children:"Hola, este es el contenido"}),e.jsx("img",{src:"https://picsum.photos/400/200",className:"w-full h-48 object-cover rounded-md",alt:"Un paisaje"}),e.jsx("div",{}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"text-gray-800 text-sm",children:"Este texto tiene un contraste muy bajo."}),e.jsx("h2",{className:"text-xl font-semibold mt-2",children:"Tarjeta inaccesible"}),e.jsx("p",{className:"mt-2 text-gray-600",children:"Esta tarjeta contiene múltiples errores de accesibilidad para ser detectados."}),e.jsx("div",{onClick:a,className:"mt-4 p-2 bg-blue-800 text-white text-center rounded cursor-pointer hover:bg-blue-600",children:"Haz clic aquí"})]})]})};t.__docgenInfo={description:`Componente intencionadamente inaccesible para demostración en Storybook.
NO USAR EN PRODUCCIÓN.`,methods:[],displayName:"InaccessibleCard"};const n={title:"Ejercicios/InaccessibleCard",component:t,parameters:{layout:"centered"}},s={render:()=>e.jsx(t,{})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <InaccessibleCard />
}`,...s.parameters?.docs?.source},description:{story:`Historia por defecto del componente inaccesible.

INSTRUCCIONES PARA CLASE:
1. Abre este componente en la interfaz de Storybook.
2. En el panel inferior/lateral, haz clic en la pestaña "Accessibility".
3. Revisa el reporte generado automáticamente que listará las violaciones detectadas
   (contraste, etiquetas de imagen y roles de botón).`,...s.parameters?.docs?.description}}};const o=["Default"];export{s as Default,o as __namedExportsOrder,n as default};
