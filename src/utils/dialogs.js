export function alert(message) {
  const backdrop = document.createElement('div');
  Object.assign(backdrop.style, {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0,0,0,0.25)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });
  const dialog = document.createElement('div');
  Object.assign(dialog.style, {
    background: '#fff',
    position: 'absolute',
    padding: '14px 24px',
    maxWidth: '75vw',
    borderRadius: '3px',
    margin: '15px',
    boxShadow: '0 5px 10px rgba(0,0,0,0.35)',
  });
  dialog.appendChild(document.createTextNode('' + message));
  backdrop.onclick = () => {
    document.body.removeChild(backdrop);
  };
  backdrop.appendChild(dialog);
  document.body.appendChild(backdrop);
}

export function confirm(message) {
  alert(message);
  return false;
}

export function prompt(message) {
  alert(message);
  return '';
}