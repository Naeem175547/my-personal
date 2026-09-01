// findsumof square of odd number and even number
        int sumOfoddn = li.stream().filter((a) -> a % 2 != 0).map(n -> n *
        n).mapToInt(a -> a).sum();
        System.out.println(sumOfoddn);