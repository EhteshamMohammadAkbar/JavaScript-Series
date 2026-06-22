// Most Used JavaScript String Methods
// Frontend + Backend

const text = "   Hello, JavaScript World!  ";
console.log("Original:", JSON.stringify(text));

console.log("length:", text.length);
console.log("toUpperCase():", text.toUpperCase());
console.log("toLowerCase():", text.toLowerCase());

console.log("trim():", JSON.stringify(text.trim()));
console.log("trimStart():", JSON.stringify(text.trimStart()));
console.log("trimEnd():", JSON.stringify(text.trimEnd()));

console.log("includes('JavaScript'):", text.includes("JavaScript"));
console.log("startsWith('   He'):", text.startsWith("   He"));
console.log("endsWith('World!  '):", text.endsWith("World!  "));

console.log("indexOf('JavaScript'):", text.indexOf("JavaScript"));
console.log("lastIndexOf('l'):", text.lastIndexOf("l"));

console.log("slice(3, 8):", text.slice(3, 8));
console.log("substring(3, 8):", text.substring(3, 8));

console.log("replace('JavaScript', 'JS'):", text.replace("JavaScript", "JS"));
const multi = "foo foo foo";
console.log("replaceAll('foo', 'bar'):", multi.replaceAll("foo", "bar"));

console.log("split(','):", text.trim().split(","));
console.log("charAt(7):", text.charAt(7));
console.log("at(7):", text.at(7));

console.log("concat():", text.trim().concat(" - Learn more"));
console.log("repeat(2):", "Hi! ".repeat(2));

console.log("padStart(10):", "123".padStart(10, "0"));
console.log("padEnd(10):", "123".padEnd(10, "."));

console.log("match(/[A-Za-z]+/g):", text.match(/[A-Za-z]+/g));
console.log("search('World'):", text.search("World"));



