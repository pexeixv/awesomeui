import {Button} from '@pexeixv/awesomeui';


const App = () => {
    return (
      <section>
          <div style={{width: '100%', maxWidth: '1100px', margin: '0 auto', padding: '40px 20px'}}>
            <h1>Testing &lt;Button/&gt;</h1>
            <div style={{display: 'flex', gap: '2em', marginTop: '40px'}}>
              <Button text="Click me" backgroundColor="lightblue" foregroundColor="black" />
              <Button text="Submit" backgroundColor="lightgreen" foregroundColor="black"/>
              <Button text="Cancel" backgroundColor="tomato"  />
            </div>
          </div>
      </section>
    );
}
export default App;