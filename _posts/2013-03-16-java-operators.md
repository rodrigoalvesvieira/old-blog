---
layout: post
title: Java Operator Precedence Table
---

<span class="drops">F</span>rom time to time I forget how exactly Java deals with operator precedence and I figured out other people could have the same trouble remembering as me. So I grabbed them operators on the Net and put them in the following table:

<table>
  <thead>
    <tr>
      <th>Purpose</th>
      <th>Operators</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Postfix unary</td>
      <td>n++, n--</td>
    </tr>

    <tr>
      <td>Prefixed unary</td>
      <td>++n, --n</td>
    </tr>

    <tr>
      <td>Multiplicatives</td>
      <td>*, /, %</td>
    </tr>

    <tr>
      <td>Additives</td>
      <td>+, -</td>
    </tr>

    <tr>
      <td>Shift</td>
      <td><<, >>, >>></td>
    </tr>

    <tr>
      <td>Relational</td>
      <td><, >, <=, >=, instanceof</td>
    </tr>

    <tr>
      <td>Equality checkers</td>
      <td>==, !=</td>
    </tr>

    <tr>
      <td>Bit-to-bit AND</td>
      <td>&</td>
    </tr>

    <tr>
      <td>Bit-to-bit XOR</td>
      <td>^</td>
    </tr>

    <tr>
      <td>Bit-to-bit OR</td>
      <td>|</td>
    </tr>

    <tr>
      <td>Logic AND</td>
      <td>&&</td>
    </tr>

    <tr>
      <td>Logic OR</td>
      <td>||</td>
    </tr>

    <tr>
      <td>Conditional</td>
      <td>?:</td>
    </tr>

    <tr>
      <td>Assignment</td>
      <td>=, +=, -=, *=, /=, %=, &=, ^=, |=, <<=, >>=, >>>=</td>
    </tr>

  </tbody>
</table>

Hope it can be useful. In case I have missed or mistaken something, please leave your correction in th comments.