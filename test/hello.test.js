import hello from './hello.js';
import { assert } from 'chai';

it('Should print hello',()=>{
    const helloResponse = hello();

    assert.equal(helloResponse, 'hello');
});