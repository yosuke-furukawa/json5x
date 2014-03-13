import "json5.jsx";
import "test-case.jsx";

class _Test extends TestCase {
  function testParse() : void {
      var testData = """
      {
      foo: 'bar',
      while: true,

      this: 'is a \
      multi-line string',

      // this is an inline comment
      here: 'is another', // inline comment

      /* this is a block comment
      that continues on another line */

      hex: 0xDEADbeef,
      half: .5,
      delta: +10,
      to: Infinity,   // and beyond!

      finally: 'a trailing comma',
      oh: [
      "we shouldn't forget",
      'arrays can have',
      'trailing commas too',
      ],
      }
      """;
      var testJson = JSON5.parse(testData);
      this.expect(testJson["foo"]).toBe("bar");
      this.expect(testJson["while"]).toBe(true);
      this.expect(testJson["this"]).toMatch(/^is a .*/);
      this.expect(testJson["this"]).toMatch(/.* multi-line string/);
      this.expect(testJson["here"]).toBe("is another");
      this.expect(testJson["hex"]).toBe(0xDEADbeef);
      this.expect(testJson["half"]).toBe(0.5);
      this.expect(testJson["delta"]).toBe(10);
      this.expect(testJson["to"]).toBe(Infinity);
      this.expect(testJson["finally"]).toBe("a trailing comma");
      this.expect(testJson["oh"]).toEqual([ "we shouldn't forget", "arrays can have", "trailing commas too"]);
  }
  function testStringify() : void {
      var testData = """
      {
      foo: 'bar',
      while: true,

      this: 'is a \
      multi-line string',

      // this is an inline comment
      here: 'is another', // inline comment

      /* this is a block comment
      that continues on another line */

      hex: 0xDEADbeef,
      half: .5,
      delta: +10,
      to: Infinity,   // and beyond!

      finally: 'a trailing comma',
      oh: [
      "we shouldn't forget",
      'arrays can have',
      'trailing commas too',
      ],
      }
      """;
      var testJson = JSON5.parse(testData);
      var testString = JSON5.stringify(testJson);
      this.expect(testString).toMatch(/^{.*}$/);
  }
}
