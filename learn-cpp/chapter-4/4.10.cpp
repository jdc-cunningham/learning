#include <iostream>

// whoops supposed to use if statements
int isPrime(int number)
{
  return number > 1 && number % 2 > 0;
}

int main()
{
  int number{};
  std::cout << "Enter a number \n";
  std::cin >> number;
  std::cout << "Your number is " << (isPrime(number) ? "a prime" : "not a prime") << " number";
}