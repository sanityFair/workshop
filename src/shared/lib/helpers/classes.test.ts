import { classes } from './classes';
describe("classes", () => {
    it('positve',()=>{
        expect(classes({cls:'test'})).toEqual('test')
    })
});
