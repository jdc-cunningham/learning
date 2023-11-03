#include <iostream>

int main()
{
  std::cout << "How old are you?";
  int age{ };
  std::cin >> age;
  std::cout << "You are " << age << " years old";
  return 0;
}