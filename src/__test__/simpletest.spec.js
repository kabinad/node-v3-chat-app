describe("Testing the dummy API", () => {
    it("tests our testing framework if it works", () => {
      expect(4).toBe(4);
    });
  });

afterAll((done) => {
   
    done();
  });

// async/await can also be used.
it('works with async/await', async () => {
    const userName = 'Mark';
    expect(userName).toEqual('Mark');
  });