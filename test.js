// push之后会立即触发pipeline的source并在30s内成功
// 随后触发prod，失败了，因为check changeset status错误（可能因为当时有一个failed的changeset？）
// 但我记得上一次prod成功的时候，并没有创建任何changeset，是我手动创建了一个有效的changeset（之后不管手动还是自动创建都无效了）
console.log("Hello World!250206-1518");