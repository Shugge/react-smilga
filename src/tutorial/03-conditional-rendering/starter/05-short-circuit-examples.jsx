import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return <div>
    <h2>{text || 'default'}</h2>
    {/* {text && (
      <div>
        <h2>Opa</h2>
        <h2>{name}</h2>
      </div>
      )} */}
      {user && <OpaComponent name={user.name} />}
      <h2 style={{margin: '1rem 0'}}>Divider</h2>
      <button className='btn'>{isEditing ? 'edit' : 'add'}</button>
      {user ? 
      (
        <div>
          <h4>Herro {user.name}</h4>
        </div>
      ) :
      (
        <div>
          <h4>Prease rog in</h4>
        </div>
      )}
  </div>;
};

const OpaComponent = ({name}) => {
  return (
      <div>
        <h2>Opa</h2>
        <h2>{name}</h2>
      </div>
  );
}

export default ShortCircuitExamples;
