#include <iostream>

int readNumber()
{
  int number {};
  std::cin >> number;
  return number;
}

void writeAnswer(int answer)
{
  std::cout << "The sum is " << answer;
}

int main()
{
  int x {};
  int y {};

  std::cout << "Enter a number \n";
  x = readNumber();
  std::cout << "Enter another number \n";
  y = readNumber();
  writeAnswer(x + y);
  return 0;
}