
import {Container} from '@mui/material';

import TodoList from '../src/components/TodoList';
import TodoForm from '../src/components/TodoForm';

function Addjs(){
    
    return(
        <Container maxWidth="sm">
          <TodoForm/>
            <TodoList/>
        </Container>
    )
}
export default Addjs;
