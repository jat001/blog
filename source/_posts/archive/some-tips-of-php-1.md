---
title: PHP 小技巧（一）
tags:
  - PHP
  - 小技巧
  - 程序员
id: 1138
categories:
  - 程序员
date: 2015-10-29 22:18:08
---

曾经我以为 PHP 很简单，但后来发现我错了，不是 PHP 简单，而是 PHP 容易入门；不是 PHP 写不出好代码，而是很多 PHP 程序员只关心如何实现，却不关心如何优雅地实现。


### 弱类型也有类型

PHP 是弱类型的语言，但不代表没有类型，PHP 会[隐式转换类型][1]，你也可以强制转换。

像 `$_GET` `$_POST` 这样的外部变量，初始类型都是字符串。

当判断一个有可能被转换为 FALSE 的变量是否存在时，请使用 `isset($foo)` 而不是 `!$foo`。当 `$foo` 真的不存在时，后者会报 `Notice: Undefined variable`；当后者的值为 0 空字符串 NULL 等的时候，[后者会返回 TRUE][2]。


### foreach

```php
<?php

function foo()
{
    echo 'a';

    return [1, 2, 3];
}

foreach (foo() as $v)
{

}

// 输出 a
```

据某资深程序员说，在 PHP 4 中，会输出 'aaa'，因为每移动一次指针，foo() 都会重新执行一次，但是在 PHP 5 中没有重现。


### 巧用[闭包][3]和[引用][4]

```php
<?php

$foo = 'Hello';

$bar = function ($arg) use (&$foo)
{
    $foo .= $arg;
};

$bar(' World.');

echo $foo;

// 输出 Hello World.

$foo = 'foo';

$bar('bar');

// 输出 foobar
```

```php
<?php

$bar = function ($foo) use (&$bar)
{
    $foo--;

    if ($foo > 5)
    {
        return $bar($foo);
    }

    return $foo;
};

echo $bar(10);

// 输出 5
```


### [阅后即焚][5]

```php
<?php

$file = '/path/to/file';

readfile($file);

fastcgi_finish_request();

unlink($file);
```


[1]: http://cn2.php.net/manual/zh/language.types.type-juggling.php "类型转换的判别"
[2]: http://cn2.php.net/manual/zh/language.types.boolean.php#language.types.boolean.casting "转换为布尔值"
[3]: http://cn2.php.net/manual/zh/functions.anonymous.php "匿名函数"
[4]: http://cn2.php.net/manual/zh/language.references.php "引用的解释"
[5]: http://cn2.php.net/manual/zh/function.fastcgi-finish-request.php "fastcgi_finish_request"