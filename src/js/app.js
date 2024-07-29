// TODO: write your code here
import sum from './basic';

export default function healthCheker(hero) {
  if (hero.health > 50) {
    return "healthy";
  }
  if (15 <= hero.health && hero.health <= 50) {
    return "wounded";
  } else {
    return "critical";
  }
}

console.log('worked');

console.log(sum([1, 2]));
