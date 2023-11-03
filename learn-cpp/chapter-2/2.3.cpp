#include <iostream>

int doubleNumber(int param)
{
  return param * 2;
}

int main()
{
  int input{};
  std::cout << "Enter a number \n";
  std::cin >> input;
  std::cout << "Your number times 2 is " << doubleNumber(input);
  return 0;
}