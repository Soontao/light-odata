import { ODataFilter } from "../src";
import { transformation, Transformation } from "../src/tranformation";


describe('Transofmration Test Suite', () => {

  it('should support to create instnace', () => {
    expect(Transformation.newTransformation()).toBeInstanceOf(Transformation)
  });

  it('should support use aggregate transformation', () => {
    expect(Transformation.newTransformation().aggregate('Amount with sum as Total').toString()).toMatchSnapshot()
  });

  it('should support countSumPercents transformations', () => {
    expect(Transformation.newTransformation().topsum(10, 'Amount').toString()).toMatchSnapshot()
    expect(Transformation.newTransformation().topcount(15, 'Sales/Amount').toString()).toMatchSnapshot()
    expect(Transformation.newTransformation().toppercent(3, 'Age').toString()).toMatchSnapshot()
    expect(Transformation.newTransformation().bottomsum(10, 'Amount').toString()).toMatchSnapshot()
    expect(Transformation.newTransformation().bottomcount(15, 'Sales/Amount').toString()).toMatchSnapshot()
    expect(Transformation.newTransformation().bottompercent(3, 'Age').toString()).toMatchSnapshot()
  });

  it('should support identity tranformation', () => {
    expect(Transformation.newTransformation().identity().toString()).toMatchSnapshot()
  });

  it('should support concat transformation', () => {
    expect(
      Transformation
        .newTransformation()
        .concat(
          Transformation.newTransformation().topcount(2, 'Amount'),
          Transformation.newTransformation().aggregate('Amount'),
        )
        .toString()
    ).toMatchSnapshot()
  });

  it('should support filter transformation', () => {

    expect(transformation().filter(ODataFilter.newFilter().field('Amount').gt(3)).toString()).toMatchSnapshot()

  });

  it('should supoprt simply groupBy', () => {
    expect(
      Transformation.
        newTransformation().
        groupBy(['Customer/Country', 'Product/Name']).
        toString()
    )
      .toMatchSnapshot()

    expect(
      Transformation.
        newTransformation().
        groupBy(
          ['Customer/Country', 'Product/Name'],
          Transformation.newTransformation().aggregate('Amount with sum as Total')
        ).
        toString()
    ).toMatchSnapshot()
  });

});
