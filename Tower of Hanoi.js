function hanoi(n, source, target, aux) {
    if (n === 1) {
      console.log(`Move disk 1 from ${source} to ${target}`);
    } else {
      hanoi(n - 1, source, aux, target);
      console.log(`Move disk ${n} from ${source} to ${target}`);
      hanoi(n - 1, aux, target, source);
    }
  }
  hanoi(4, 'A', 'C', 'B');
  
 